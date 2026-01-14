import Link from "next/link"
import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-primary">Beavirág</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Várjuk szeretettel minden kedves vásárlónkat friss virágokkal és egyedi alkotásokkal.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Linkek</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/viragok" className="text-muted-foreground hover:text-primary transition-colors">
                  Virágok
                </Link>
              </li>
              <li>
                <Link href="/kellekek" className="text-muted-foreground hover:text-primary transition-colors">
                  Kellékek
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok" className="text-muted-foreground hover:text-primary transition-colors">
                  Szolgáltatások
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - Updated phone number and removed email */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Elérhetőség</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:06304739147" className="hover:text-primary transition-colors">
                  06 30 473 9147
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours - Updated opening hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Nyitvatartás</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Hétfő: 7:00-17:00</p>
              <p>Kedd: 7:00-18:00</p>
              <p>Szerda: 7:00-18:00</p>
              <p>Csütörtök: 7:00-18:00</p>
              <p>Péntek: 7:00-18:00</p>
              <p>Szombat: 6:00-14:00</p>
              <p>Vasárnap: 8:00-12:00</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Beavirág. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  )
}
