import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function ViragokPage() {
  const szalasViragok = [
    { name: "Gerbera", description: "Vidám színek", image: "gerbera.jpg", season:" " },
    { name: " Szegfű", description: "Tartós frissesség", image: " szegfu.jpg", season:" " },
    { name: " Szellő rózsa", description: "Romantikus báj", image: " szello_rozsa.jpg", season:" " },
    { name: "Tulipán", description: "Tavaszi szépség", image: "tulipan.jpg", season:" " },
    { name: "Csoportos rózsa", description: "Vidám színek", image: "gerbera.jpg", season:" " },
    { name: "Csoportos szegfű", description: "Vidám színek", image: "gerbera.jpg", season:" " },
    { name: "Frézia", description: "Vidám színek", image: "gerbera.jpg", season:" " },
    { name: "Strelicia", description: "Vidám színek", image: "gerbera.jpg", season:" " },
    { name: "Hiperikum", description: "Vidám színek", image: "gerbera.jpg", season:" " },
    { name: "Kardvirág", description: "Kizárólag", image: "gerbera.jpg", season:" summer"},
    { name: "Írisz", description: "Vidám színek", image: "gerbera.jpg", season:" " },
  ]

  const cserepesNovenyek = [
    { name: "Orchidea", description: "Elegáns virágzat", image: "potted_orchidea.jpg", season:" " },
    { name: "Ciklámen", description: "Az elegáns téli dísz", image: "potted_ciklamen.jpg", season:" " },
    { name: "Korál", description: "A strapabíró pozsgás", image: "potted_koral.jpg", season:" " },
    { name: "Legényfogó pálma", description: "A pusztíthatatlan", image: "potted_legenyfogo.jpg", season:" " },
    { name: "Yucca pálma", description: "A sivatagi harcos", image: "potted_yucca.jpg", season:" " },
    { name: "Jácint", description: "Vázák királynője", image: "ililiom.jpg", season:" " },

  ]
const cserepesvagyszalasnovenyek = [
    { name: "Rózsa", description: "Tartós szépség", image: "potted_rozsa.jpg", season:" " },
    { name: "Liliom", description: "Elegáns illat", image: "liliom.jpg", season:" " },
    { name: "Király liliom", description: "Klasszikus szépség", image: "kliliom.jpg", season:" " },
    { name: "Flamingó virág", description: "Az egzotikus fényes kedvenc", image: "potted_flamingo.jpg", season:" " },
    { name: "Inkaliliom", description: "Vázák királynője", image: "ililiom.jpg", season:" " },
    { name: "Nárcisz", description: "Tartós szépség", image: "potted_rozsa.jpg", season:" " },

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
              backgroundImage: "url('virag-banner.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-background/70" />
          </div>

          <div className="relative z-10 text-center px-4">
             <div className="relative z-10 text-center px-4">
            <h1 className="animate-title-reveal font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Virágaink
            </h1>
            <p className="animate-text-slide animation-delay-400 text-lg text-muted-foreground max-w-2xl mx-auto">
              Friss vágott virágok és cserepes növények kedvező áron
            </p>
          </div>
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
                      backgroundImage: `url('/${virag.image}')`, position:"relative"
                    }}
                  />
                  <div className={virag.season}>
                  </div>
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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
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
               <section id="cserepes" className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Cserepes vagy szálas növények</h2>
            <p className="text-muted-foreground mb-12 leading-relaxed">
              Akár cserépben, akár vázában: tartós növények és virágok megfizethetően, ápolási tanácsokkal.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {cserepesvagyszalasnovenyek.map((noveny, index) => (
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
