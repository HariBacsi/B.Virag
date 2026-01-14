import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Heart, Award, Users, Sparkles } from "lucide-react"

export default function RolunkPage() {
  return (
    <>
      <Navigation />

      <main className="mt-16 md:mt-20">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/flower-shop-interior-cozy-welcoming.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-background/70" />
          </div>

          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Rólunk</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Szenvedély, tapasztalat és szeretet minden virágban
            </p>
          </div>
        </section>

        {/* Történetünk */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">Történetünk</h2>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
                <div
                  className="aspect-[4/3] bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: "url('/tulajdonos.jpg')",
                  }}
                />
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    A Beavirág több mint 10 éve szolgálja ki szerető ügyfélbázisát a legfrissebb és legszebb virágokkal.
                    Családi vállalkozásként indultunk, és azóta is ugyanazzal a szenvedéllyel dolgozunk minden egyes
                    csokron.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Számunkra a virág nem csak díszítés - ez egy érzés, egy üzenet, egy pillanat megörökítése. Minden
                    egyes virágkompozíciót szívvel-lélekkel, egyedi igényekre szabva készítünk el.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-4 order-2 md:order-1">
                  <p className="text-muted-foreground leading-relaxed">
                    Csapatunk tapasztalt virágkötőkből áll, akik folyamatosan követik a legújabb trendeket, de
                    tiszteletben tartják a klasszikus stílusokat is. Számunkra fontos, hogy minden vásárlónk olyan
                    virágot vigyen haza, amely tökéletesen kifejezi érzéseit.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Büszkék vagyunk arra, hogy az évek során számos esküvőn, születésnapon és különleges alkalmon
                    lehettünk részesek virágainkkal. Köszönjük bizalmukat!
                  </p>
                </div>
                <div
                  className="aspect-[4/3] bg-cover bg-center rounded-lg order-1 md:order-2"
                  style={{
                    backgroundImage: "url('/uzlet.jpg')",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Miért mi */}
        <section className="py-16 md:py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">Miért válassz minket?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Szenvedély</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Szeretettel és odafigyeléssel készítjük minden egyes csokrot
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Minőség</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Csak a legfrissebb és legszebb virágokat válogatjuk
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Tapasztalat</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  10+ év szakmai tudás és számos elégedett ügyfél
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Egyediség</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Minden kompozíció egyedi, személyre szabott alkotás
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
