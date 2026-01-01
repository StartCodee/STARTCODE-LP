/** @type {import('tailwindcss').Config} */
module.exports = {
  // shadcn / theme toggle umumnya pakai class "dark"
  darkMode: ["class"],

  // ✅ Purge paling aman untuk CRA: scan hanya source code
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  // (Optional) Jika kamu punya folder lain, tambahkan di sini
  // content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  // ✅ Plugin animate (kalau kamu pakai Radix/shadcn animations)
  plugins: [require("tailwindcss-animate")],

  // ✅ (Optional) safelist MINIMAL
  // Gunanya: kalau kamu ada class dinamis (mis. `text-${...}`), Tailwind bisa kepurge.
  // Kalau kamu tidak pakai class dinamis, kamu boleh hapus bagian safelist ini.
  safelist: [
    // ring / shadow untuk state fokus/hover yang kadang dibentuk dinamis
    "ring-[#5e4bf5]/40",
    "shadow-[#5e4bf5]/10",

    // warna brand yang kamu pakai inline di className
    "bg-[#5e4bf5]",
    "hover:bg-[#5038d4]",
    "text-[#5e4bf5]",
  ],
};
