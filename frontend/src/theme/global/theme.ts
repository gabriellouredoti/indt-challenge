export const theme = {
	title: "light",
	colors: {
		typography: {
			text: "#A2A4A6",
			title: "#3C3C3B",
			subtitle: "#888888",
			strong: "#141414",
		},

		toast: {
			error: {
				text: "#0B140D",
				bg: "#F8D4D4",
				border: "#DF0B0B",
				icon: "#DF0B0B",
			},
			success: {
				text: "#0B140D",
				bg: "#CDEAE1",
				border: "#28B369",
				icon: "#28B369",
			},
			info: {
				text: "#0B140D",
				bg: "#D6E2FE",
				border: "#1B81D2",
				icon: "#1B81D2",
			},
		},

		primary: {
			900: "#00582A",
			800: "#00773D",
			700: "#098849",
			600: "#169A55",
			500: "#1EA95E",
			400: "#4AB676",
			300: "#6CC28D",
			200: "#98D3AD",
			100: "#C0E4CD",
			50: "#E5F4EB",
			// light: "rgba(3, 50, 141, 0.40)",
		},

		secondary: {
			900: "#004A94",
			800: "#0F67B3",
			700: "#1878C5",
			600: "#2289D7",
			500: "#2A97E4",
			400: "#48A6E7",
			300: "#68B5EA",
			200: "#91CAF1",
			100: "#BBDEF6",
			50: "#E3F2FB",
		},

		actions: {
			success: "#28B369",
			info: "#1B81D2",
			warning: "#EFAE26",
			error: "#DF0B0B",
			errorLight: "#EF8586",
			disabled: "#ededed",
		},

		pests: {
			folder: {
				border: "#dedede",
				bg: "#ffffff",
				hoverBg: "#E4F4EA",
				text: "#3C3C3B",
			},
			gallery: {
				iconGreen: "#006735",
				iconRed: "#E32626",
				iconBg: "#ffffff",
			},
		},

		input: {
			text: "#3C3C3B",
			placeholder: "#AFAFAF",
			black: "#141414",
			selectedBg: "#E4F4EA",
			unSelectedBg: "#ffffff",
			hover: "#e1e1e1",
			disabled: "#d6d6d6",
			border: "#b6b6b6",
			successShadow: "rgba(0, 88, 43, 0.408)",
			errorShadow: "rgba(255, 3, 41, 0.267)",
		},

		upload: {
			text: "#3C3C3B",
			border: "#adadad",
			cardBg: "#F0F0F0",
			cardBorder: "#dfdfdf",
			progress: "#179956",
			interruption: "#EFAE26",
			icon: "#ffffff",
		},

		search: {
			borderActive: "#098849",
			border: "#b6b6b6",

			icon: "#AFAFAF",
			text: "#737373",
			bg: "#ffffff",
		},

		calendar: {
			month: "#000000",
			weekDays: "#AFAFAF",
			border: "#00582A",
			popperBg: "#ffffff",
			inputBg: "#ffffff",
			inputHover: "#E4F4EA",
			daysHover: "#e9e9e9",
			daysSelected: "#169A55",
			daySelectedOld: "#aacaba",
			daysSelectedText: "#ffffff",
			disabled: "#AFAFAF",
		},

		selectColor: {
			currentText: "#111111",
			optionsText: "#A2A4A6",
			disabledText: "#A2A4A6",
			bg: "#ffffff",
			hover: "#f5f5f5",
			selected: "#E4F4EA",
			disabledBg: "#e6e6e6",
		},

		maintenance: {
			ongoing: "#D0DFF6",
			completed: "#DDF7D0",
			cancelled: "#EBC3E2",
			planned: "#F8F7D2",
		},

		status: {
			active: "#ccf0f9",
			inactive: "#f9cccc",
		},

		profiles: {
			admin: "#e6ccf9",
			assistant: "#f0c2e3",
			manager: "#cedef7",
			"chief-researcher": "#f8f8d0",
			"assistant-researcher": "#f7e3cd",
			"observer-researcher": "#f6f3ef",
			producer: "#d9f8ce",
			technical: "#d2f8e5",
			collaborator: "transparent",
		},

		carousel: {
			bg: "#E5F4EB",
			chipBg: "#ffffff",
			text: "#3C3C3B",
		},

		accordion: {
			boxBg: "#ffffff",
			boxText: "#3C3C3B",
			shadow: "#00000029",
		},

		accessTable: {
			headerText: "#3c3c3b",
			rowText: "#686867",
		},

		table: {
			headerText: "#3C3C3B",
			headerBg: "#F8F9FB",
			rowText: "#3C3C3B",
			rowBorder: "#dbdbdb",
			numberBg: "#ffffff",
			numberText: "#3C3C3B",
			numberShadow: "#00000029",
			numberBorder: "#f5f5f5",
			icon: "#959595",
			iconDisabled: "#dfdfdf",
		},

		icon: {
			arrow: "#3d3d3c",
			eye: "#AFAFAF",
			folder: "#AFAFAF",
			openMenu: "#AFAFAF",
			breadcrumb: "#000000",
			drawerIcon: "#0D8849",
		},

		common: {
			background: "#ffffff",
			white: "#ffffff",
			border: "#C6C6C6",
			placeholder: "#AFAFAF",
			skeleton: "#f5f5f5",
		},

		filter: {
			border: "#00582A",
			bg: "#ffffff",
			hoverBg: "#EFF8F3",
			counterText: "#ffffff",
			disabledText: "#332b2b",
		},

		userMenu: {
			icon: "#3C3C3B",
			iconHover: "#00773D",
		},

		checkBox: {
			border: "#ababab",
			disabledBg: "#ebebeb",
			green: "#098849",
			bg: "#ffffff",
		},

		radio: {
			border: "#AFAFAF",
			text: "#3C3C3B",
			selectedBorder: " #169A55",
			disabledBorder: "#b1b1b1",
		},

		menu: {
			bg: "#ffffff",
			border: "#ebebeb",
			text: "#707070",
			boxBg: "#F8F9FB",
			boxBorder: "#dbdbdb",
			boxText: "#3C3C3B",
			hoverBg: "#EFF8F3",
			hoverText: "#00773D",
			activeText: "#00773D",
			// hoverText: "transparent",
			// disabledBorder: "transparent",
			disabledText: "#ffffff",
		},

		button: {
			primary: {
				bg: "#00773D",
				text: "#ffffff",
				// border: "transparent",
				hoverBg: "#169A55",
				// hoverBorder: "transparent",
				// hoverText: "transparent",
				disabledBg: "#e6e6e6",
				// disabledBorder: "transparent",
				disabledText: "#ffffff",
			},

			secondary: {
				text: "#DF0B0B",
				border: "#DF0B0B",
				hoverBorder: "#DF0B0B",
				hoverText: "#DF0B0B",
				disabledBorder: "#e6e6e6",
				disabledText: "#e6e6e6",
			},

			tertiary: {
				text: "#169A55",
				border: "#169A55",
				hoverBorder: "#169A55",
				hoverText: "#169A55",
				disabledBorder: "#e6e6e6",
				disabledText: "#e6e6e6",
				bgGrey: "#A2A4A6",
			},
		},
	},
};
