import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function KellekekPage() {
  const kellekek = [
    {
      name: "Rezgő",
      description: "Szöveg",
      image: "glass+vases+clear+elegant+various+sizes",
      category: "Tömő",
    },
    {
      name: "Borostyán",
      description: "Szövegk",
      image: "ceramic+vases+colorful+modern+design",
      category: "Tömő",
    },
    {
      name: "Banánlevél",
      description: "Szöveg",
      image: "satin+ribbons+pastel+colors+rolls",
      category: "Tömő",
    },
    {
      name: "Robellini",
      description: "Szöveg",
      image: "lace+ribbons+white+romantic+wedding",
      category: "Tömő",
    },
    {
      name: "Rumóra",
      description: "Szöveg",
      image: "floral+wrapping+paper+patterns+colorful",
      category: "Tömő",
    },
    {
      name: "Eukaliptusz",
      description: "Szöveg",
      image: "kraft+paper+natural+eco+friendly+wrapping",
      category: "Tömő",
    },
    {
      name: "Orchidea",
      description: "Szöveg",
      image: "decorative+pebbles+colorful+vase+filler",
      category: "Kicsi tápoldat",
    },
    {
      name: "Általános",
      description: "Szöveg",
      image: "pearl+beads+white+elegant+decoration",
      category: "Kicsi tápoldat",
    },
    {
      name: "Muskátli",
      description: "Szöveg",
      image: "decorative+feathers+soft+pastel+floral",
      category: "Kicsi tápoldat",
    },
    {
      name: "Balkon növény",
      description: "Szöveg",
      image: "floral+tape+green+professional+tool",
      category: "Kicsi tápoldat",
    },
    {
      name: "Kaktusz",
      description: "Szöveg",
      image: "floral+wire+various+thickness+arranging",
      category: "Kicsi tápoldat",
    },
    {
      name: "Bonsai",
      description: "Szöveg",
      image: "floral+foam+green+oasis+arrangement",
      category: "Kicsi tápoldat",
    },
        {
      name: "Virágzásinditó",
      description: "Szöveg",
      image: "glass+vases+clear+elegant+various+sizes",
      category: "Kicsi tápoldat",
    },
    {
      name: "Levél-dísznövény",
      description: "Szövegk",
      image: "ceramic+vases+colorful+modern+design",
      category: "Kicsi tápoldat",
    },
    {
      name: "Citrus",
      description: "Szöveg",
      image: "satin+ribbons+pastel+colors+rolls",
      category: "Kicsi tápoldat",
    },
    {
      name: "Robellini",
      description: "Szöveg",
      image: "lace+ribbons+white+romantic+wedding",
      category: "Közepes tápoldat",
    },
    {
      name: "Orchidea",
      description: "Szöveg",
      image: "floral+wrapping+paper+patterns+colorful",
      category: "Közepes tápoldat",
    },
    {
      name: "Muskátli",
      description: "Szöveg",
      image: "kraft+paper+natural+eco+friendly+wrapping",
      category: "Közepes tápoldat",
    },
    {
      name: "Általános",
      description: "Szöveg",
      image: "decorative+pebbles+colorful+vase+filler",
      category: "Nagy tápoldat",
    },
    {
      name: "Növénytisztitópermet",
      description: "Szöveg",
      image: "pearl+beads+white+elegant+decoration",
      category: "Spray",
    },
    {
      name: "Szobanövény",
      description: "Szöveg",
      image: "decorative+feathers+soft+pastel+floral",
      category: "Táprúd",
    },
    {
      name: "Levél és zöldnövény",
      description: "Szöveg",
      image: "floral+tape+green+professional+tool",
      category: "Táprúd",
    },
    {
      name: "Integrált papír kalap (virágtartó)",
      description: "Szöveg",
      image: "floral+wire+various+thickness+arranging",
      category: "Kicsi kerámia és műanyag cserép",
    },
    {
      name: "integrált papír kalap (virágtartó)",
      description: "Szöveg",
      image: "floral+foam+green+oasis+arrangement",
      category: "Közepes kerámia és műanyag cserép",
    },
    {
      name: "integrált papír kalap (virágtartó)",
      description: "Szöveg",
      image: "floral+foam+green+oasis+arrangement",
      category: "Nagy kerámia és műanyag cserép",
    },
      {
      name: "Névvel ellátott törölközők",
      description: "Szöveg",
      image: "floral+wire+various+thickness+arranging",
      category: "Törölköző",
    },
    {
      name: "Díszdoboz",
      description: "Szöveg",
      image: "floral+foam+green+oasis+arrangement",
      category: "Különböző méretben",
    },
    {
      name: "Orchideahajó",
      description: "Szöveg",
      image: "floral+foam+green+oasis+arrangement",
      category: "Csónak alakú virágtartó",
    },
    {
      name: "Kis fatábla",
      description: "Szöveg",
      image: "floral+foam+green+oasis+arrangement",
      category: "Feliratos/számos",
    },
    {
      name: "Általános",
      description: "Szöveg",
      image: "floral+foam+green+oasis+arrangement",
      category: "Virágföld",
    },
      {
      name: "Orchidea",
      description: "Szöveg",
      image: "floral+wire+various+thickness+arranging",
      category: "Virágföld",
    },
    {
      name: "Kaktusz",
      description: "Szöveg",
      image: "floral+foam+green+oasis+arrangement",
      category: "Virágföld",
    },
    {
      name: "Tőzeg",
      description: "Szöveg",
      image: "floral+foam+green+oasis+arrangement",
      category: "Virágföld",
    },
    {
      name: "Művirág",
      description: "Szöveg",
      image: "floral+foam+green+oasis+arrangement",
      category: "Szálas, Csokros",
    },
    {
      name: "Integrált díszvirágtároló",
      description: "Szöveg",
      image: "floral+foam+green+oasis+arrangement",
      category: "Virágtároló",
    },
    {
      name: "Szalag",
      description: "Szöveg",
      image: "floral+foam+green+oasis+arrangement",
      category: "Beküldött szöveg alapján készített",
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
            <h1 className="animate-title-reveal font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kellékek
            </h1>
            <p className="animate-text-slide animation-delay-400 text-lg text-muted-foreground max-w-2xl mx-auto">
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
