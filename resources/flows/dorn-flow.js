export default [
	{
		name: "thermal",
		type: "icon",
		requiresAnswer: [],
		questionText: "Would you prefer to be?",
		questionSecondText: "",
		iconText: ["Cooler", "Warmer", "No change"],
		iconColors: ["fb-cyan", "fb-orange", "fb-green"],
		iconImages: [
			"images/icons/prefer_cold.png",
			"images/icons/prefer_warmer.png",
			"images/icons/comfy.png",
		],
	},
	{
		name: "indoorOutdoor",
		type: "icon",
		requiresAnswer: [],
		questionText: "Are you?",
		questionSecondText: "",
		iconText: ["Indoor", "Outdoor"],
		iconColors: ["fb-peach", "fb-peach"],
		iconImages: [
			"images/icons/outdoor.png",
			"images/icons/indoor.png",
		],
	},
	{
		name: "location",
		type: "icon",
		requiresAnswer: [],
		questionText: "Where are you?",
		questionSecondText: "",
		iconText: ["Home", "Office", "Neither"],
		iconColors: ["fb-peach", "fb-peach", "fb-peach"],
		iconImages: [
			"images/icons/home.png",
			"images/icons/work.png",
			"images/icons/no.png",
		],
	},
	{
		name: "clothing",
		type: "icon",
		requiresAnswer: [],
		questionText: "What are you wearing?",
		questionSecondText: "",
		iconText: ["light", "Heavy", "Medium"],
		iconColors: ["#6decb9", "#42dee1", "#3fc5f0"],
		iconImages: [
			"images/icons/light_clothes.png",
			"images/icons/heavy_clothes.png",
			"images/icons/medium_clothes.png",
		],
	},
	{
		name: "airSpeed",
		type: "icon",
		requiresAnswer: [],
		questionText: "Can you perceive air",
		questionSecondText: "movement around you?",
		iconText: ["No", "Yes"],
		iconColors: ["fb-orange", "fb-green"],
		iconImages: [
			"images/icons/air_vel_low.png",
			"images/icons/air_vel_high.png",
		],
	},
	{
		name: "met",
		type: "icon",
		requiresAnswer: [],
		questionText: "Activity last 10-min?",
		questionSecondText: "",
		iconText: ["Resting", "Sitting", "Standing"],
		iconColors: ["#A7F3D5", "#6decb9", "#42dee1"],
		iconImages: [
			"images/icons/met_resting.png",
			"images/icons/outdoor.png",
			"images/icons/indoor.png",
		],
	},
	{
		name: "anyChange",
		type: "icon",
		requiresAnswer: [],
		questionText: "Any changes in clo, loc",
		questionSecondText: "or met past 10-m?",
		iconText: ["Yes", "No"],
		iconColors: ["fb-green", "fb-orange"],
		iconImages: [
			"images/icons/yes.png",
			"images/icons/no.png",
		],
	},
	{
		name: "mood",
		type: "icon",
		requiresAnswer: [],
		questionText: "What mood are you in?",
		questionSecondText: "",
		iconText: ["Good", "Bad", "Neutral"],
		iconColors: ["fb-green", "fb-orange", "fb-cyan"],
		iconImages: [
			"images/icons/comfy.png",
			"images/icons/not-comfy.png",
			"images/icons/neutral.png",
		],
	},
	{
		name: "noise",
		type: "icon",
		requiresAnswer: [],
		questionText: "Sound preference",
		questionSecondText: "",
		iconText: ["Quiter", "Louder", "No Change"],
		iconColors: ["fb-orange", "fb-purple", "fb-green"],
		iconImages: [
			"images/icons/prefer_quieter.png",
			"images/icons/prefer_louder.png",
			"images/icons/neutral.png",
		],
	},
	{
		name: "light",
		type: "icon",
		requiresAnswer: [],
		questionText: "Light preference",
		questionSecondText: "",
		iconText: ["Dimmer", "Brighter", "No Change"],
		iconColors: ["fb-blue", "fb-peach", "fb-green"],
		iconImages: [
			"images/icons/prefer_dimmer.png",
			"images/icons/prefer_brighter.png",
			"images/icons/neutral.png",
		],
	},
];
