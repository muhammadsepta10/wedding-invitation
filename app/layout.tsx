import type { Metadata } from "next";
import { Bodoni_Moda, Playfair_Display, Great_Vibes, Pacifico, Satisfy, Lora, Crimson_Text, Roboto, Open_Sans, Lato, Raleway, Poppins, Nunito, Montserrat, Ubuntu, Oswald, PT_Sans, Roboto_Slab, Libre_Baskerville, Merriweather, PT_Serif, Crimson_Pro, Spectral, EB_Garamond, Libre_Caslon_Text, Cormorant, Cinzel, Alex_Brush, Allura, Amatic_SC, Bad_Script, Bilbo, Bilbo_Swash_Caps, Caveat, Comforter, Courgette, Damion, Kaushan_Script, Lobster, Lobster_Two, Quicksand, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-satisfy",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson-text",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-serif",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-spectral",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-caslon",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alex-brush",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});

const amatic = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amatic",
});

const badScript = Bad_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bad-script",
});

const bilbo = Bilbo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bilbo",
});

const bilboSwash = Bilbo_Swash_Caps({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bilbo-swash",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const comforter = Comforter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-comforter",
});

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-courgette",
});

const damion = Damion({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-damion",
});

const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan-script",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
});

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lobster-two",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Wedding Invitation - Septa & Denita",
  description: "We are getting married! Join us in celebrating our special day on November 21, 2025.",
  openGraph: {
    title: "Wedding Invitation - Septa & Denita",
    description: "We are getting married! Join us in celebrating our special day on November 21, 2025.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`antialiased ${inter.variable} ${dancingScript.variable} ${bodoni.variable} ${playfair.variable} ${greatVibes.variable} ${pacifico.variable} ${satisfy.variable} ${lora.variable} ${crimsonText.variable} ${roboto.variable} ${openSans.variable} ${lato.variable} ${raleway.variable} ${poppins.variable} ${nunito.variable} ${montserrat.variable} ${ubuntu.variable} ${oswald.variable} ${ptSans.variable} ${robotoSlab.variable} ${libreBaskerville.variable} ${merriweather.variable} ${ptSerif.variable} ${crimsonPro.variable} ${spectral.variable} ${ebGaramond.variable} ${libreCaslon.variable} ${cormorant.variable} ${cinzel.variable} ${alexBrush.variable} ${allura.variable} ${amatic.variable} ${badScript.variable} ${bilbo.variable} ${bilboSwash.variable} ${caveat.variable} ${comforter.variable} ${courgette.variable} ${damion.variable} ${kaushanScript.variable} ${lobster.variable} ${lobsterTwo.variable} ${quicksand.variable}`}>
        {children}
      </body>
    </html>
  );
}

