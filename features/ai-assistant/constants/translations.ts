export type Language = "en" | "mm";

export const translations = {
	en: {
		title: "Ye's Personal Assistant",
		subtitle: "Powered by OpenRouter",
		welcomeTitle: "Ask about Ye Min",
		welcomeDescription:
			"I can tell you about his skills, projects, experience, and help you navigate his portfolio.",
		suggestedQuestions: "Suggested questions",
		placeholder: "Ask about Ye Min's skills, projects, experience...",
		thinking: "Thinking...",
		errorMessage: "I'm having trouble responding right now. Please try again later.",
		retry: "Retry",
		suggestedPrompts: [
			"Tell me about Ye Min",
			"What projects has he built?",
			"What is his tech stack?",
			"Tell me about his IoT project",
			"What are his strongest skills?",
		],
	},
	mm: {
		title: "ရဲမင်းအောင်၏ ကိုယ်ပိုင်လက်ထောက်",
		subtitle: "OpenRouter ကို အသုံးပြုထားပါသည်",
		welcomeTitle: "ရဲမင်းအောင်အကြောင်း မေးပါ",
		welcomeDescription:
			"သူ့စွမ်းရည်များ၊ ပရော့ဂျက်များ၊ အတွေ့အကြုံများအကြောင်း ပြောပြနိုင်ပြီး ပေါ့တ်ဖိုလီယိုကို လှည့်ပတ်ကြည့်ရှုနိုင်ပါသည်။",
		suggestedQuestions: "အကြံပြုမေးခွန်းများ",
		placeholder: "ရဲမင်းအောင်၏ စွမ်းရည်၊ ပရော့ဂျက်၊ အတွေ့အကြုံအကြောင်း မေးပါ...",
		thinking: "စဉ်းစားနေသည်...",
		errorMessage: "ယခုအချိန်တွင် တုံ့ပြန်ရန် အခက်အခဲရှိနေပါသည်။ နောက်မှ ထပ်ကြိုးစားကြည့်ပါ။",
		retry: "ထပ်ကြိုးစားပါ",
		suggestedPrompts: [
			"ရဲမင်းအောင်အကြောင်း ပြောပြပါ",
			"သူဘယ်လို project တွေ လုပ်ဖူးလဲ",
			"သူ့ tech stack ဘာတွေလဲ",
			"သူ့ IoT project အကြောင်း ပြောပြပါ",
			"သူ့အတွက် အကောင်းဆုံး စွမ်းရည်တွေ ဘာတွေလဲ",
		],
	},
} as const;
