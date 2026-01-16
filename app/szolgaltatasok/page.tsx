import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Heart, Church, Flower2, PhoneCall } from "lucide-react"

export default function SzolgaltatasokPage() {
  const szolgaltatasok = [
    {
      icon: Heart,
      title: "Csokorkészítés alkalomra",
      description:
        "Születésnapra, évfordulóra, névnapra vagy csak úgy - készítünk egyedi csokrokat minden alkalomra. Kérésed szerint válogatjuk össze a legszebb virágokat.",
      image: "/birthday-bouquet-colorful-celebration.jpg",
      hasImage: true,
    },
    {
      icon: Church,
      title: "Esküvői dekoráció",
      description:
        "Teljes körű esküvői virágdíszítés: menyasszonyi csokor, vőlegény kitűző, asztaldíszek, templomi és terembérlés. Álmaid esküvőjéhez tervezünk.",
      image: "/wedding-wreath-beautiful-elegant.jpg",
      hasImage: true,
    },
    {
      icon: Flower2,
      title: "Temetési koszorúk",
      description:
        "Méltó búcsúztatáshoz elegáns koszorúk, sírdíszek és emlékezés virágai. Tisztelettel és tapintattal állítjuk össze a legszebb kompozíciókat.",
      image: "/funeral-wreath-sad-respectful.jpg",
      hasImage: true,
      isCenter: true,
    },
    {
      icon: PhoneCall,
      title: "Egyedi rendelés",
      description:
        "Van egy különleges elképzelésed? Hívj minket bizalommal! Telefonon leadott rendeléseket is szívesen fogadunk, és megvalósítjuk az egyedi kéréseket.",
      phone: "06 30 473 9147",
      hasImage: false,
      isCustomOrder: true,
    },
  ]

  return (
    <>
      <Navigation />

      <main className="mt-16 md:mt-20">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('szolgaltatasok-banner.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-background/70" />
          </div>

          <div className="relative z-10 text-center px-4">
            <h1 className="animate-title-reveal font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Szolgáltatásaink
            </h1>
            <p className="animate-text-slide animation-delay-400 text-lg text-muted-foreground max-w-2xl mx-auto">
              Egyedi virágkompozíciók minden élethelyzetre
            </p>
          </div>
        </section>

        {/* Szolgáltatások */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {szolgaltatasok.map((szolgaltatas, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden group ${
                    szolgaltatas.isCustomOrder || szolgaltatas.isCenter ? "md:col-span-2" : ""
                  }`}
                >
                  {szolgaltatas.hasImage && (
                    <div
                      className="h-64 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${szolgaltatas.image}')`,
                      }}
                    />
                  )}
                  <div className={`p-6 md:p-8 ${szolgaltatas.isCustomOrder ? "md:p-12 text-center" : ""}`}>
                    {!szolgaltatas.isCustomOrder && (
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <szolgaltatas.icon className="h-6 w-6 text-primary" />
                      </div>
                    )}
                    <h3
                      className={`font-serif text-2xl font-bold text-foreground mb-3 ${szolgaltatas.isCustomOrder ? "md:text-3xl" : ""}`}
                    >
                      {szolgaltatas.title}
                    </h3>
                    <p
                      className={`text-muted-foreground leading-relaxed mb-4 ${szolgaltatas.isCustomOrder ? "text-lg max-w-3xl mx-auto" : ""}`}
                    >
                      {szolgaltatas.description}
                    </p>
                    {szolgaltatas.phone && (
                      <a
                        href={`tel:${szolgaltatas.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-xl transition-colors"
                      >
                        <PhoneCall className="h-5 w-5" />
                        {szolgaltatas.phone}
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center bg-secondary/30 rounded-lg p-8 md:p-12">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Tedd különlegessé pillanataidat!</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                Lépj velünk kapcsolatba, és beszéljük meg elképzeléseidet. Segítünk megvalósítani álmaid
                virágdekorációját.
              </p>
              <p className="text-primary font-semibold text-lg">Hívjon fel minket</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
