import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function ViragokPage() {
  const szalasViragok = [
    { name: "Gerbera", description: "Vidám színek", image: "gerbera.jpg" },
    { name: "Rózsa", description: "Klasszikus szépség", image: "rozsa.jpg" },
    { name: "Liliom", description: "Elegáns illat", image: "liliom.jpg" },
    { name: "Szegfű", description: "Tartós frissesség", image: "szegfu.jpg" },
    { name: "Szellő rózsa", description: "Romantikus báj", image: "szello_rozsa.jpg" },
    { name: "Tulipán", description: "Tavaszi szépség", image: "tulipan.jpg" },
  ]

  const cserepesNovenyek = [
    { name: "Rózsa", description: "Tartós szépség", image: "potted_rozsa.jpg" },
    { name: "Orchidea", description: "Elegáns virágzat", image: "potted_orchidea.jpg" },
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
              backgroundImage: "url('/flower-shop-interior-beautiful-flowers.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-background/70" />
          </div>

          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Virágaink</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Friss vágott virágok és cserepes növények kedvező áron
            </p>
          </div>
        </section>

        {/* Szálas virágok */}
        <section id="szalas" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Szálas virágok</h2>
            <p className="text-muted-foreground mb-12 leading-relaxed">
              Friss, napi kínálatból válogass kedvező áron. Szezonális változatosság garantált.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {szalasViragok.map((virag, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div
                    className="aspect-square bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/${virag.image}')`,
                    }}
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">{virag.name}</h3>
                    <p className="text-sm text-muted-foreground">{virag.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cserepes növények */}
        <section id="cserepes" className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Cserepes növények</h2>
            <p className="text-muted-foreground mb-12 leading-relaxed">
              Tartós növények otthonodba vagy ajándékba megfizethető áron. Gondozási tanácsokkal.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
              {cserepesNovenyek.map((noveny, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div
                    className="aspect-square bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/${noveny.image}')`,
                    }}
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">{noveny.name}</h3>
                    <p className="text-sm text-muted-foreground">{noveny.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
