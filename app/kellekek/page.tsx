import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function KellekekPage() {
  const kellekek = [
    {
      name: "Üveg vázák",
      description: "Különböző méretekben",
      image: "glass+vases+clear+elegant+various+sizes",
      category: "Váza",
    },
    {
      name: "Kerámia vázák",
      description: "Színes dizájnok",
      image: "ceramic+vases+colorful+modern+design",
      category: "Váza",
    },
    {
      name: "Szatén szalagok",
      description: "Pasztell árnyalatok",
      image: "satin+ribbons+pastel+colors+rolls",
      category: "Szalag",
    },
    {
      name: "Csipke szalagok",
      description: "Romantikus stílus",
      image: "lace+ribbons+white+romantic+wedding",
      category: "Szalag",
    },
    {
      name: "Kreatív csomagolópapír",
      description: "Virágmintás",
      image: "floral+wrapping+paper+patterns+colorful",
      category: "Csomagolás",
    },
    {
      name: "Natúr csomagolópapír",
      description: "Öko-barát",
      image: "kraft+paper+natural+eco+friendly+wrapping",
      category: "Csomagolás",
    },
    {
      name: "Dekor kavicsok",
      description: "Különleges színek",
      image: "decorative+pebbles+colorful+vase+filler",
      category: "Díszek",
    },
    {
      name: "Gyöngyök",
      description: "Elegáns kiegészítők",
      image: "pearl+beads+white+elegant+decoration",
      category: "Díszek",
    },
    {
      name: "Dekor tollak",
      description: "Extra részletek",
      image: "decorative+feathers+soft+pastel+floral",
      category: "Díszek",
    },
    {
      name: "Virágkötő szalag",
      description: "Profi eszköz",
      image: "floral+tape+green+professional+tool",
      category: "Eszköz",
    },
    {
      name: "Virágkötő drót",
      description: "Különböző vastagságok",
      image: "floral+wire+various+thickness+arranging",
      category: "Eszköz",
    },
    {
      name: "Virágszivacs",
      description: "Tökéletes tartás",
      image: "floral+foam+green+oasis+arrangement",
      category: "Eszköz",
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
              backgroundImage: "url('/flower-accessories-vases-ribbons-wrapping.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-background/70" />
          </div>

          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Kellékek</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Minden, amire szükséged lehet a tökéletes virágdekorációhoz
            </p>
          </div>
        </section>

        {/* Kellékek */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {kellekek.map((kellek, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-muted" />
                  <div className="p-4">
                    <div className="text-xs text-primary font-medium mb-1">{kellek.category}</div>
                    <h3 className="font-semibold text-foreground mb-1">{kellek.name}</h3>
                    <p className="text-sm text-muted-foreground">{kellek.description}</p>
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
