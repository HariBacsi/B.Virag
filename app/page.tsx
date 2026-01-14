import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Flower2, MapPin, Clock, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center mt-16 md:mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/beautiful-fresh-spring-flowers-bouquet-pink-roses-.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Természet szépsége, virágok varázsa
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Friss szálas virágok, cserepes növények és virágkellékek széles választéka egy helyen
          </p>
          <Button asChild size="lg" className="text-base px-8">
            <Link href="/kapcsolat">
              Lépj kapcsolatba
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Fedezd fel kínálatunkat
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Szálas virágok */}
            <Link href="/viragok#szalas">
              <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 h-full">
                <div
                  className="aspect-[4/5] bg-cover bg-center relative"
                  style={{
                    backgroundImage: "url('/fresh-cut-flowers-bouquet-tulips-roses.jpg')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Szálas virágok</h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">Friss vágott virágok minden alkalomra</p>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Cserepes virágok */}
            <Link href="/viragok#cserepes">
              <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 h-full">
                <div
                  className="aspect-[4/5] bg-cover bg-center relative"
                  style={{
                    backgroundImage: "url('/potted-plants-orchids-succulents-indoor.jpg')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Cserepes növények</h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">Tartós növények otthonodba</p>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Kellékek */}
            <Link href="/kellekek">
              <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 h-full">
                <div
                  className="aspect-[4/5] bg-cover bg-center relative"
                  style={{
                    backgroundImage: "url('/flower-vases-ribbons-wrapping-paper-accessories.jpg')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Kellékek</h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">Vázák, szalagok és díszítőelemek</p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Címünk</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Budapest 1039
                <br />
                Heltai Jenő tér 1-3
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Nyitvatartás</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                H: 7-17
                <br />
                K-P: 7-18
                <br />
                Szo: 6-14
                <br />
                Vas: 8-12
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Flower2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Szolgáltatásaink</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Csokorkészítés, esküvői dekoráció,
                <br />
                egyedi rendelések
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
