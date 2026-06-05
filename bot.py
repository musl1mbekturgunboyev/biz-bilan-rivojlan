#!/usr/bin/env python3
"""
RIVOJLAN — Telegram Bot
Token: 8812940526:AAFfS8PgwthWa10IhQv-HivXc_J9nxzITJo

O'rnatish:
  pip install python-telegram-bot==20.7 supabase python-dotenv schedule

Ishga tushirish:
  python bot.py
"""

import os
import json
import random
import asyncio
import logging
import schedule
import time
import threading
from datetime import datetime
from dotenv import load_dotenv

from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, ReplyKeyboardMarkup, KeyboardButton
from telegram.ext import (
    Application, CommandHandler, CallbackQueryHandler,
    MessageHandler, filters, ContextTypes, ConversationHandler
)

load_dotenv()

# =============================================
# SOZLAMALAR
# =============================================
BOT_TOKEN = "8812940526:AAFfS8PgwthWa10IhQv-HivXc_J9nxzITJo"
SUPABASE_URL = os.getenv("SUPABASE_URL", "https://your-project.supabase.co")
SUPABASE_KEY = os.getenv("SUPABASE_KEY", "your-anon-key")
SITE_URL = "https://rivojlan.netlify.app"  # Sizning sayt URL
BOT_USERNAME = "BizBilan_Rivojlan_bot"

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)
logger = logging.getLogger(__name__)

# =============================================
# SO'ZLAR VA TARJIMALAR (1-bo'lim)
# =============================================
WORDS = {
    "afraid": "qo'rqmoq", "agree": "rozi bo'lmoq", "angry": "g'azablangan",
    "arrive": "kelmoq", "attack": "hujum qilmoq", "bottom": "pastki qism",
    "clever": "aqlli", "cruel": "shafqatsiz", "finally": "nihoyat", "hide": "yashirmoq",
    "hunt": "ov qilmoq", "lot": "ko'p", "middle": "o'rta", "moment": "lahza",
    "pleased": "xursand", "promise": "va'da", "reply": "javob bermoq", "safe": "xavfsiz",
    "trick": "aldamchi", "well": "yaxshi", "adventure": "sarguzasht",
    "approach": "yaqinlashmoq", "carefully": "ehtiyotkorlik bilan", "chemical": "kimyoviy",
    "create": "yaratmoq", "evil": "yovuz", "experiment": "tajriba", "kill": "o'ldirmoq",
    "laboratory": "laboratoriya", "laugh": "kulmoq", "loud": "baland ovozda",
    "nervous": "asabiy", "noise": "shovqin", "project": "loyiha", "scare": "qo'rqitmoq",
    "secret": "sir", "shout": "baqirmoq", "smell": "hid", "terrible": "dahshatli",
    "worse": "yomonroq", "alien": "begona", "among": "orasida", "chart": "jadval",
    "cloud": "bulut", "comprehend": "tushunmoq", "describe": "tasvirlamoq",
    "ever": "hech qachon", "fail": "muvaffaqiyatsiz", "friendly": "do'stona",
    "grade": "daraja", "instead": "o'rniga", "library": "kutubxona", "planet": "sayyora",
    "report": "hisobot", "several": "bir nechta", "solve": "yechmoq",
    "suddenly": "to'satdan", "suppose": "taxmin qilmoq", "universe": "koinot",
    "view": "ko'rinish", "appropriate": "mos", "avoid": "qochmoq", "behave": "o'zini tutmoq",
    "calm": "sokin", "concern": "tashvish", "content": "kontent", "expect": "kutmoq",
    "frequently": "tez-tez", "habit": "odat", "instruct": "o'rgatmoq", "issue": "masala",
    "none": "hech biri", "patient": "sabr-toqatli", "positive": "ijobiy",
    "punish": "jazolamoq", "represent": "vakil bo'lmoq", "shake": "silkitmoq",
    "spread": "tarqalmoq", "stroll": "sayr qilmoq", "village": "qishloq",
    "aware": "xabardor", "badly": "yomon", "belong": "tegishli bo'lmoq",
    "continue": "davom ettirmoq", "error": "xato", "experience": "tajriba",
    "field": "maydon", "hurt": "og'ritmoq", "judgment": "hukm", "likely": "ehtimol",
    "normal": "oddiy", "rare": "kamyob", "relax": "dam olmoq", "request": "so'rov",
    "reside": "yashamoq", "result": "natija", "roll": "o'rash", "since": "dan beri",
    "visible": "ko'rinadigan", "wild": "yovvoyi",
}

UNITS = {
    1: ["afraid", "agree", "angry", "arrive", "attack", "bottom", "clever", "cruel", "finally", "hide",
        "hunt", "lot", "middle", "moment", "pleased", "promise", "reply", "safe", "trick", "well"],
    2: ["adventure", "approach", "carefully", "chemical", "create", "evil", "experiment", "kill",
        "laboratory", "laugh", "loud", "nervous", "noise", "project", "scare", "secret", "shout", "smell", "terrible", "worse"],
    3: ["alien", "among", "chart", "cloud", "comprehend", "describe", "ever", "fail", "friendly",
        "grade", "instead", "library", "planet", "report", "several", "solve", "suddenly", "suppose", "universe", "view"],
    4: ["appropriate", "avoid", "behave", "calm", "concern", "content", "expect", "frequently",
        "habit", "instruct", "issue", "none", "patient", "positive", "punish", "represent", "shake", "spread", "stroll", "village"],
    5: ["aware", "badly", "belong", "continue", "error", "experience", "field", "hurt", "judgment",
        "likely", "normal", "rare", "relax", "request", "reside", "result", "roll", "since", "visible", "wild"],
}

# =============================================
# FOYDALANUVCHI MA'LUMOTLARI (oddiy JSON fayl)
# =============================================
DATA_FILE = "users_data.json"

def load_data():
    try:
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except:
        return {}

def save_data(data):
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def get_user(chat_id):
    data = load_data()
    cid = str(chat_id)
    if cid not in data:
        data[cid] = {
            "chat_id": chat_id, "name": "", "email": "",
            "pts": 0, "streak": 0, "last_active": "",
            "current_unit": 1, "passed_units": [],
            "monthly_pts": [0,0,0,0,0,0],
            "quiz_state": None
        }
        save_data(data)
    return data[cid]

def update_user(chat_id, updates):
    data = load_data()
    cid = str(chat_id)
    if cid not in data:
        data[cid] = get_user(chat_id)
    data[cid].update(updates)
    data[cid]["last_active"] = datetime.now().strftime("%Y-%m-%d")
    save_data(data)

# =============================================
# QUIZ HOLATI
# =============================================
quiz_sessions = {}  # chat_id: {words, idx, right, mode, unit}

def build_quiz(words_list, count=10):
    pool = random.sample(words_list, min(count, len(words_list)))
    questions = []
    all_uz = list(WORDS.values())
    for word in pool:
        correct = WORDS.get(word, word)
        wrong = random.sample([v for v in all_uz if v != correct], 3)
        opts = [correct] + wrong
        random.shuffle(opts)
        questions.append({"word": word, "correct": correct, "opts": opts})
    return questions

# =============================================
# KOMANDALAR
# =============================================
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id
    user = get_user(chat_id)
    name = update.effective_user.first_name or "O'quvchi"

    if not user.get("name"):
        update_user(chat_id, {"name": name})

    keyboard = [
        [KeyboardButton("📚 Darslar"), KeyboardButton("🏆 Reyting")],
        [KeyboardButton("👤 Profil"), KeyboardButton("📊 Tahlil")],
        [KeyboardButton("🎯 Test boshlash")],
    ]
    reply_markup = ReplyKeyboardMarkup(keyboard, resize_keyboard=True)

    await update.message.reply_text(
        f"👋 Salom, *{name}*!\n\n"
        f"🌟 *Rivojlan* — ingliz tili o'rgatish platformasiga xush kelibsiz!\n\n"
        f"📱 Sayt: {SITE_URL}\n\n"
        f"*Nima qilishni xohlaysiz?*",
        parse_mode='Markdown',
        reply_markup=reply_markup
    )

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id
    text = update.message.text.strip()

    if text == "📚 Darslar":
        await show_units(update, context)
    elif text == "🏆 Reyting":
        await show_leaderboard(update, context)
    elif text == "👤 Profil":
        await show_profile(update, context)
    elif text == "📊 Tahlil":
        await show_analysis(update, context)
    elif text == "🎯 Test boshlash":
        await show_unit_choice(update, context)
    else:
        # Quiz javobi
        if chat_id in quiz_sessions:
            await handle_quiz_answer(update, context, text)
        else:
            await update.message.reply_text("Menyu tugmalaridan foydalaning 👆")

async def show_units(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id
    user = get_user(chat_id)
    passed = user.get("passed_units", [])
    current = user.get("current_unit", 1)

    text = "📚 *Bo'lim 1 — Darslar:*\n\n"
    for unit_n, words in UNITS.items():
        done = unit_n in passed
        locked = unit_n > 1 and (unit_n - 1) not in passed
        if done:
            status = "✅"
        elif locked:
            status = "🔒"
        else:
            status = "📖"
        text += f"{status} *Dars {unit_n}* — {len(words)} so'z\n"
        if not done and not locked:
            text += f"   _{', '.join(words[:4])}_...\n"
        text += "\n"

    keyboard = []
    for unit_n in UNITS.keys():
        done = unit_n in passed
        locked = unit_n > 1 and (unit_n - 1) not in passed
        if not locked:
            label = f"{'✅' if done else '📖'} Dars {unit_n}"
            keyboard.append([InlineKeyboardButton(label, callback_data=f"unit_{unit_n}")])

    keyboard.append([InlineKeyboardButton(f"🌐 Saytda o'rganish", url=SITE_URL)])
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(text, parse_mode='Markdown', reply_markup=reply_markup)

async def show_unit_choice(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id
    user = get_user(chat_id)
    passed = user.get("passed_units", [])

    keyboard = []
    for unit_n in UNITS.keys():
        locked = unit_n > 1 and (unit_n - 1) not in passed
        done = unit_n in passed
        if not locked:
            label = f"{'✅' if done else '🎯'} Dars {unit_n} — Test"
            keyboard.append([InlineKeyboardButton(label, callback_data=f"quiz_{unit_n}")])

    if not keyboard:
        await update.message.reply_text("Hali birorta dars ochilmagan. Avval saytda o'rganing!")
        return

    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "🎯 *Qaysi dars testini topshirmoqchisiz?*\n\n"
        "_70% dan yuqori to'g'ri javob bering_",
        parse_mode='Markdown',
        reply_markup=reply_markup
    )

async def button_callback(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    chat_id = query.message.chat_id
    data = query.data

    if data.startswith("unit_"):
        unit_n = int(data.split("_")[1])
        words = UNITS[unit_n]
        text = f"📖 *Dars {unit_n} — So'zlar ro'yxati:*\n\n"
        for w in words:
            uz = WORDS.get(w, w)
            text += f"• *{w}* — {uz}\n"
        text += f"\n📝 So'zlarni o'rganib bo'lgach, test topshiring!"
        keyboard = [[InlineKeyboardButton(f"🎯 Dars {unit_n} testini boshlash", callback_data=f"quiz_{unit_n}")]]
        await query.edit_message_text(text, parse_mode='Markdown', reply_markup=InlineKeyboardMarkup(keyboard))

    elif data.startswith("quiz_"):
        unit_n = int(data.split("_")[1])
        words = UNITS[unit_n]
        questions = build_quiz(words, count=10)
        quiz_sessions[chat_id] = {
            "questions": questions, "idx": 0, "right": 0,
            "mode": "unit", "unit": unit_n, "selected": False
        }
        await query.edit_message_text(
            f"🎯 *Dars {unit_n} — Test boshlanmoqda!*\n\n"
            f"📊 Jami: 10 ta savol\n"
            f"✅ O'tish chegarasi: 70%\n\n"
            f"_Har bir so'zning o'zbekcha tarjimasini tanlang_",
            parse_mode='Markdown'
        )
        await send_question(context, chat_id)

    elif data.startswith("opt_"):
        await handle_option_callback(update, context)

async def send_question(context, chat_id):
    session = quiz_sessions.get(chat_id)
    if not session: return

    idx = session["idx"]
    questions = session["questions"]

    if idx >= len(questions):
        await show_quiz_result(context, chat_id)
        return

    q = questions[idx]
    session["selected"] = False
    text = (
        f"❓ *Savol {idx+1}/{len(questions)}*\n\n"
        f"🔤 *{q['word']}*\n\n"
        f"O'zbekcha tarjimasi qaysi?"
    )
    keyboard = [[InlineKeyboardButton(opt, callback_data=f"opt_{i}")] for i, opt in enumerate(q["opts"])]
    await context.bot.send_message(chat_id, text, parse_mode='Markdown', reply_markup=InlineKeyboardMarkup(keyboard))

async def handle_option_callback(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    chat_id = query.message.chat_id
    session = quiz_sessions.get(chat_id)
    if not session or session.get("selected"): return

    session["selected"] = True
    opt_idx = int(query.data.split("_")[1])
    q = session["questions"][session["idx"]]
    chosen = q["opts"][opt_idx]
    correct = q["correct"]
    is_right = chosen == correct

    if is_right:
        session["right"] += 1
        feedback = f"✅ *To'g'ri!* `{q['word']}` = *{correct}*"
    else:
        feedback = f"❌ *Noto'g'ri!*\n`{q['word']}` = *{correct}*\nSiz tanladingiz: _{chosen}_"

    session["idx"] += 1
    progress = f"📊 {session['right']}/{session['idx']} to'g'ri"

    if session["idx"] < len(session["questions"]):
        keyboard = [[InlineKeyboardButton("▶️ Keyingisi", callback_data="next_q")]]
        await query.edit_message_text(f"{feedback}\n\n{progress}", parse_mode='Markdown', reply_markup=InlineKeyboardMarkup(keyboard))
    else:
        await query.edit_message_text(f"{feedback}\n\n{progress}", parse_mode='Markdown')
        await show_quiz_result(context, chat_id)

async def show_quiz_result(context, chat_id):
    session = quiz_sessions.pop(chat_id, None)
    if not session: return

    right = session["right"]
    total = len(session["questions"])
    pct = round((right / total) * 100)
    passed = pct >= 70
    unit_n = session.get("unit", 1)

    emoji = "🏆" if pct >= 90 else "✅" if passed else "😔"
    status = "O'TDI" if passed else "O'TMADI"

    text = (
        f"{emoji} *Test natijasi — Dars {unit_n}*\n\n"
        f"📊 Natija: *{pct}%* ({right}/{total})\n"
        f"🎯 Holat: *{status}*\n\n"
    )

    if passed:
        # Keyingi darsni ochish
        user = get_user(chat_id)
        passed_units = user.get("passed_units", [])
        if unit_n not in passed_units:
            passed_units.append(unit_n)
        pts_earned = right * 5
        new_pts = user.get("pts", 0) + pts_earned
        update_user(chat_id, {"passed_units": passed_units, "pts": new_pts})
        text += (
            f"💰 Qo'shilgan ball: *+{pts_earned}*\n"
            f"📈 Jami ball: *{new_pts}*\n\n"
        )
        if unit_n < max(UNITS.keys()):
            text += f"🔓 *Dars {unit_n+1} ochildi!*\n\n"
            if unit_n + 1 == max(UNITS.keys()):
                text += "🎉 *Bo'lim imtihoniga tayyormisiz?*"
        else:
            text += "🎉 *Barcha darslar tugallandi! Bo'lim imtihonini topshiring!*"
    else:
        text += f"💡 *Maslahat:* So'zlarni qayta ko'rib chiqing va yana urinib ko'ring.\nO'tish chegarasi: *70%*"

    keyboard = [
        [InlineKeyboardButton("🔄 Qayta urinish", callback_data=f"quiz_{unit_n}")],
        [InlineKeyboardButton("📚 Darslar", callback_data="show_units")],
        [InlineKeyboardButton(f"🌐 Saytga o'tish", url=SITE_URL)],
    ]
    await context.bot.send_message(chat_id, text, parse_mode='Markdown', reply_markup=InlineKeyboardMarkup(keyboard))

async def handle_quiz_answer(update: Update, context: ContextTypes.DEFAULT_TYPE, text: str):
    await update.message.reply_text("Iltimos, yuqoridagi tugmalardan birini tanlang.")

async def show_leaderboard(update: Update, context: ContextTypes.DEFAULT_TYPE):
    data = load_data()
    users_list = sorted(data.values(), key=lambda x: x.get("pts", 0), reverse=True)
    chat_id = update.effective_chat.id

    text = "🏆 *Reyting — Top 10:*\n\n"
    medals = ["🥇", "🥈", "🥉"]
    for i, u in enumerate(users_list[:10]):
        medal = medals[i] if i < 3 else f"{i+1}."
        me_mark = " 👈" if str(u.get("chat_id")) == str(chat_id) else ""
        name = u.get("name", "Noma'lum")
        pts = u.get("pts", 0)
        streak = u.get("streak", 0)
        text += f"{medal} *{name}*{me_mark} — {pts} ball 🔥{streak}\n"

    await update.message.reply_text(text, parse_mode='Markdown')

async def show_profile(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id
    user = get_user(chat_id)
    name = update.effective_user.first_name or user.get("name", "O'quvchi")
    update_user(chat_id, {"name": name})

    data = load_data()
    all_pts = sorted([u.get("pts", 0) for u in data.values()], reverse=True)
    rank = all_pts.index(user.get("pts", 0)) + 1 if user.get("pts", 0) in all_pts else len(all_pts)

    passed = len(user.get("passed_units", []))
    words_learned = sum(len(UNITS.get(u, [])) for u in user.get("passed_units", []))

    text = (
        f"👤 *{name} — Profil*\n\n"
        f"⭐ Daraja: *Beginner*\n"
        f"🏆 Reyting: *#{rank}*\n"
        f"💰 Ball: *{user.get('pts', 0)}*\n"
        f"📖 Tugatilgan darslar: *{passed}*\n"
        f"📝 O'rganilgan so'zlar: *{words_learned}*\n"
        f"🔥 Streak: *{user.get('streak', 0)} kun*\n\n"
        f"📱 Saytda batafsil: {SITE_URL}"
    )
    await update.message.reply_text(text, parse_mode='Markdown')

async def show_analysis(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id
    user = get_user(chat_id)
    monthly = user.get("monthly_pts", [0]*6)
    months = ["Yan", "Fev", "Mar", "Apr", "May", "Iyn"]

    text = "📊 *Oylik progress:*\n\n"
    max_pts = max(monthly) if any(monthly) else 1
    for i, (m, pts) in enumerate(zip(months, monthly)):
        bar_len = int((pts / max_pts) * 10) if max_pts > 0 else 0
        bar = "█" * bar_len + "░" * (10 - bar_len)
        text += f"{m}: {bar} {pts}\n"

    text += (
        f"\n💰 *Jami ball:* {user.get('pts', 0)}\n"
        f"📖 *O'rganilgan so'zlar:* {sum(len(UNITS.get(u, [])) for u in user.get('passed_units', []))}\n"
        f"✅ *Topshirilgan testlar:* {len(user.get('passed_units', []))}"
    )
    await update.message.reply_text(text, parse_mode='Markdown')

# =============================================
# OYLIK HISOBOT (avtomatik)
# =============================================
async def send_monthly_reports(app):
    data = load_data()
    month_names = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
                   "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
    current_month = month_names[datetime.now().month - 1]

    for cid, user in data.items():
        try:
            pts = user.get("pts", 0)
            passed = len(user.get("passed_units", []))
            words = sum(len(UNITS.get(u, [])) for u in user.get("passed_units", []))
            name = user.get("name", "O'quvchi")

            message = "🌟 Zo'r natija! Shunday davom eting!" if pts > 100 else "💪 Kuchliroq harakat qiling!"

            text = (
            f"📊 *{current_month} oyi hisoboti*\n\n"
            f"Salom, *{name}*!\n\n"
            f"Bu oy qanday natija ko'rsatdingiz:\n\n"
            f"💰 Jami ball: *{pts}*\n"
            f"📖 Tugatilgan darslar: *{passed}*\n"
            f"📝 O'rganilgan so'zlar: *{words}*\n\n"
            f"{message}\n\n"
            f"🌐 Sayt: {SITE_URL}"
    )
            await app.bot.send_message(int(cid), text, parse_mode='Markdown')
        except Exception as e:
            logger.error(f"Hisobot yuborishda xato {cid}: {e}")

# =============================================
# BOT ISHGA TUSHIRISH
# =============================================
def main():
    app = Application.builder().token(BOT_TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CallbackQueryHandler(button_callback))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    logger.info("✅ Rivojlan bot ishga tushdi!")
    app.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == "__main__":
    main()