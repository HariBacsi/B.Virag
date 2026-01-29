"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { useState } from "react"

export default function KapcsolatPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "kecsbea@gmail.com",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log("Form submitted:", formData)
    alert("Köszönjük üzeneted! Hamarosan keresünk.")
  }

  return (
    <>
      <Navigation />

      <main className="mt-16 md:mt-20">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('kapcsolat-banner.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-background/70" />
          </div>
          

          <div className="relative z-10 text-center px-4">
            <h1 className="animate-title-reveal font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kapcsolat
            </h1>
            <p className="animate-text-slide animation-delay-400 text-lg text-muted-foreground max-w-2xl mx-auto">
              Várjuk szeretettel minden kedves vásárlónkat
            </p>
          </div>
        </section>

        {/* Kapcsolat */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-12">
                {/* Bal oldal: Kapcsolati információk */}
                <div className="space-y-8">
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Elérhetőségeink</h2>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Címünk</h3>
                          <p className="text-muted-foreground">
                            Budapest 1039
                            <br />
                            Heltai Jenő tér 1-3
                            <br />
                            <span className="text-xs mt-1 block">A munkaügyi központtal szemben</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-17">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Telefonszám</h3>
                          <a
                            href="tel:06304739147"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            06 30 473 9147
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <a
                            href="mailto:kecsbea@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            kecsbea@gmail.com

                          </a>
                        </div>
                      </div>
                  </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Nyitvatartás</h3>
                          <div className="text-muted-foreground space-y-1">
                            <p>Hétfő: 7:00 - 17:00</p>
                            <p>Kedd: 7:00 - 18:00</p>
                            <p>Szerda: 7:00 - 18:00</p>
                            <p>Csütörtök: 7:00 - 18:00</p>
                            <p>Péntek: 7:00 - 18:00</p>
                            <p>Szombat: 6:00 - 14:00</p>
                            <p>Vasárnap: 8:00 - 12:00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Térkép */}
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.6!2d19.0469!3d47.5557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddb4e4f8c3b7%3A0x0!2sBudapest%2C%20Heltai%20Jen%C5%91%20t%C3%A9r%201-3%2C%201039!5e0!3m2!1sen!2shu!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* Jobb oldal: Kép */}
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/contact-beautiful-flower-arrangement.jpg"
                    alt="Gyönyörű virágkompozíció"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div style={{borderRadius:"16px"}} className="bg-secondary/30 rounded-lg p-8 space-y-4 max-w-4xl mx-auto" >
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Látogasson el hozzánk személyesen!
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Üzletünkben minden nap friss virágok várják Önt. Tapasztalt virágkötőink segítenek kiválasztani a
                  tökéletes csokrot vagy növényt minden alkalomra.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Legyen szó születésnapról, évfordulóról, esküvőről vagy egyszerűen csak egy kedves meglepetésről -
                  nálunk megtalálja, amit keres, kedvező áron!
                </p>
                <div className="pt-4 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground italic">
                    Személyes rendelés esetén is kérjük, hívja telefonon kollégáinkat, hogy biztosan készüljön fel
                    minden az Ön érkezésére.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
