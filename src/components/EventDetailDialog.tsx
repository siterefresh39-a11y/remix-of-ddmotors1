import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { loadEvents, type EventItem } from "@/lib/eventStore";

interface EventDetailDialogProps {
  eventId: string | null;
  onClose: () => void;
}

const eventsData = loadEvents();

const EventDetailDialog = ({ eventId, onClose }: EventDetailDialogProps) => {
  const event = eventId ? eventsData.find((e) => e.id === eventId) : null;

  return (
    <Dialog open={!!eventId} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-foreground/10 p-0">
        {event?.id === "ev4" && (
          <>
            <img src={event.img} alt={event.title} className="w-full object-cover" width={672} height={448} />
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="font-display text-2xl md:text-3xl tracking-wider text-foreground">
                1ST "CARS & BIKES MEETING"
              </h2>
              <p className="text-foreground/80 font-body text-sm leading-relaxed whitespace-pre-line">
{`@auto500milano SPONSOR UFFICIALE

INGRESSO GRATUITO !!!!

180 POSTI AUTO E MOTO
Iscriviti per non mancare al nostro primo evento: link nelle storie e in bio

📅 Venerdì 12 Dicembre
📍Parcheggio Sergio Ramelli, Trezzano Sul Naviglio (MI)
🕘 dalle 21:00 alle 00:00

VI ASPETTIAMO NUMEROSI!!!!!!

🔥NO BANG
🎶NO MUSICA
💨NO SGOMMATE
💥NO SPARI NEL PARCHEGGIO
👮‍♂️NO COMPORTAMENTI CHE POSSANO DISTURBARE O CREARE PERICOLO

📲 Condividi ed entra anche tu nella famiglia di DD.MOTORS

GRAZIE A "UN PONTE NELLA VITA"
Un associazione di genitori che hanno figli con disabilità.
Per saperne di più consultare il sito, la pagina Instagram, Facebook, mail e numero di telefono`}
              </p>
              <div className="space-y-1 text-foreground/70 font-body text-sm">
                <p>🌐 <a href="https://www.unpontenellavita.it" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">unpontenellavita.it</a></p>
                <p>📸 @unpontenellavita2023</p>
                <p>✉️ unpontenellavita@libero.it</p>
                <p>📞 339 6971339</p>
              </div>
              <p className="text-foreground/80 font-body text-sm leading-relaxed whitespace-pre-line">
{`GRAZIE A @radunostatico e a @exclusivemotorframe per la partecipazione
GRAZIE A @ruotequadrenerviano per la partecipazione

GRAZIE AL @comune_trezzanosulnaviglio per aver accolto e patrocinato il nostro primo evento.`}
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display text-sm tracking-widest uppercase border border-foreground/30 px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 mt-2"
              >
                Clicca qui per iscrivere la tua auto
                <ExternalLink size={14} />
              </a>
            </div>
          </>
        )}
        {event?.id === "ev5" && (
          <>
            <img src={event.img} alt={event.title} className="w-full object-cover" width={672} height={448} />
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="font-display text-2xl md:text-3xl tracking-wider text-foreground">
                Diamond "shisha&lounge" X DDMOTORS present:
              </h2>
              <h3 className="font-display text-xl md:text-2xl tracking-wider text-foreground">
                1st edition of "DDMOTORS NIGHT"
              </h3>
              <p className="text-foreground/80 font-body text-sm leading-relaxed whitespace-pre-line">
{`Il 20 Febbraio dalle 21:30 alle 2:30, ti aspettiamo a vivere con noi la prima serata che unisce gli appassionati di motori ad una serata in un ambiente esclusivo a pochi passi da Milano!!!!!

Iscrivi la tua macchina nel link in bio prima che sia troppo tardi!!!(selezione)
Chi sarà selezionato avrà un tavolo prenotato durante tutta la serata..

Per prenotare un tavolo o avere maggiori info del locale contattare al numero 352 0928363
Via Novara, 35 Bareggio (MI).`}
              </p>
              <div className="space-y-2 text-foreground/80 font-body text-sm leading-relaxed">
                <p className="font-semibold text-foreground">Grazie:</p>
                <p>@diamondshishamilano per questa collaborazione e per offrici un'ambiente perfetto per passare insieme una serata diversa dalle altre.</p>
                <p>@alexisrodriguez_dj che ci accompagnerà tutta la serata con la sua musica.</p>
                <p>@casadei.car.journal per le foto e video</p>
                <p>@alberto_paiano per le foto e video</p>
                <p>@street_custom_creew per la partecipazione e prima collaborazione</p>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display text-sm tracking-widest uppercase border border-foreground/30 px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 mt-2"
              >
                Clicca qui per iscrivere la tua auto
                <ExternalLink size={14} />
              </a>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailDialog;
