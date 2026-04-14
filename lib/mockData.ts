export type StatKey = "n" | "e" | "o" | "a" | "c";

export type Decision = {
  id: string;
  text: string;
  hiddenStructure: string;
  flavorReveal: string;
  statImpact: Partial<Record<StatKey, number>>;
};

export type Voice = {
  structure: string;
  text: string;
};

export type GameEvent = {
  id: string;
  sceneText: string;
  voices: Voice[];
  decisions: Decision[];
};

export const events: GameEvent[] = [
  {
    id: "evt_milestone_pierwsze_slowo",
    sceneText:
      "Wszyscy czekają. Mama płacze ze wzruszenia. Tata ma kamerę (pionowo, oczywiście). Babcia przyjechała 200 km. Cisza. Wszystkie oczy na Ciebie. Otwierasz usta.",
    voices: [
      {
        structure: "Hipokamp",
        text: "Ten okrągły kształt... widziałem go codziennie. Kojarzę. Ciepło. Jedzenie. Ma jakieś imię, nie?",
      },
      {
        structure: "Jądro Ogoniaste",
        text: "Ostatnio jak wydałem dźwięk, WSZYSCY klaskali. Zróbmy to znowu. NATYCHMIAST.",
      },
      {
        structure: "Ciało Migdałowate",
        text: "ZA DUŻO LUDZI. Za dużo oczu. Czemu babcia tak głośno oddycha?!",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "Powiedz 'mama'",
        hiddenStructure: "Hipokamp",
        flavorReveal:
          "Hipokamp połączył twarz z dźwiękiem. Miesiące obserwacji skompresowane w jedno słowo. Mama płacze. Tata nagrywa. Babcia mówi 'a u mnie pierwsze słowo powiedział dziadek'.",
        statImpact: { o: 3, a: 2 },
      },
      {
        id: "dec_2",
        text: "Wskaż na kota i powiedz 'niuniu'",
        hiddenStructure: "Jądro Ogoniaste",
        flavorReveal:
          "Jądro ogoniaste zarejestrowało: futro = mięciutkie = dopamina. Słowo 'niuniu' to czysta spontaniczność — mózg wybrał to, co daje radość, nie to, co oczekuje publiczność.",
        statImpact: { e: 4, o: 3 },
      },
      {
        id: "dec_3",
        text: "Rozpłacz się tak głośno, że sąsiad puka w ścianę",
        hiddenStructure: "Ciało Migdałowate",
        flavorReveal:
          "Ciało migdałowate włączyło alarm: za dużo twarzy, za dużo oczekiwań, za głośne oddychanie babci. Jedyna rozsądna reakcja? WRZASK. U niemowląt ciało migdałowate jest jedną z najbardziej aktywnych struktur.",
        statImpact: { n: 5, e: -2 },
      },
    ],
  },

  {
    id: "evt_milestone_wyscig_rowerek",
    sceneText:
      "Bartek z przedszkola twierdzi, że jest najszybszy na świecie. Na rowerku biegowym. Cały plac zabaw patrzy. Linia startu narysowana kijem w piasku. To jest poważna sprawa.",
    voices: [
      {
        structure: "Jądro Ogoniaste",
        text: "Bartek NIE JEST najszybszy. MY jesteśmy. Pokaż mu. POKAŻ MU. Trofeum w postaci gumowego misia czeka na mecie!",
      },
      {
        structure: "Kora Przedczołowa",
        text: "Hm... nawierzchnia jest piaszczysta. To niebezpieczne. Chyba. Nie wiem, mam 5 lat.",
      },
      {
        structure: "Wzgórze",
        text: "Wiatr na twarzy. Zapach piasku. Krzyk Bartka. Dźwięk kółek. Dużo danych. Przekazuję dalej.",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "Przyjmij wyzwanie i pedałuj jakby nie było jutra",
        hiddenStructure: "Jądro Ogoniaste",
        flavorReveal:
          "Jądro ogoniaste zobaczyło jedną rzecz: WYŚCIG = DOPAMINA. Rywalizacja aktywuje układ nagrody u dzieci szczególnie silnie — dlatego gra 'kto pierwszy' nigdy się nie nudzi.",
        statImpact: { e: 6, n: -2, a: -2 },
      },
      {
        id: "dec_2",
        text: "Odmów — to głupie i ktoś się przewróci",
        hiddenStructure: "Kora Przedczołowa",
        flavorReveal:
          "Kora przedczołowa — malutka, ledwo funkcjonalna — próbowała obliczyć ryzyko. Wyszło: 'piasek + prędkość = aua'. To dużo jak na 5-latka. Niestety, teraz masz przydomek 'ten co się boi'.",
        statImpact: { n: 3, e: -4, c: 4 },
      },
      {
        id: "dec_3",
        text: "Jedź, ale ostrożnie — to nie wyścig, to przejażdżka",
        hiddenStructure: "Wzgórze",
        flavorReveal:
          "Wzgórze odebrało oba sygnały — 'jedź szybko!' i 'nie jedź!' — i przekazało kompromis. Wzgórze nie podejmuje decyzji, filtruje sygnały. Jak sekretarka: 'oba telefony dzwonią, odbierz ważniejszy'.",
        statImpact: { o: 2, a: 2, c: 2 },
      },
    ],
  },

  {
    id: "evt_milestone_pierwszy_dzien_szkoly",
    sceneText:
      "Plecak większy od Ciebie. Piórnik pachnie plastikiem. Mama powiedziała 'będzie fajnie!' siedem razy rano. Stoisz przed budynkiem, który wygląda jak więzienie z kolorowymi oknami.",
    voices: [
      {
        structure: "Ciało Migdałowate",
        text: "Ten budynek ma TRZY PIĘTRA. I pełno ludzi. I dzwonek, który brzmi jak alarm pożarowy. NIE WCHODŹ.",
      },
      {
        structure: "Jądro Ogoniaste",
        text: "Nowe kredki! Nowy piórnik! Nowi ludzie! Może ktoś będzie miał lepszy piórnik?! Muszę sprawdzić!",
      },
      {
        structure: "Hipokamp",
        text: "Zapamiętaj: wejście główne, korytarz w lewo, druga klasa na prawo. Pani ma na imię... zaraz... pani. Tak. Pani.",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "Chwyć mamę za nogę i nie puszczaj",
        hiddenStructure: "Ciało Migdałowate",
        flavorReveal:
          "Ciało migdałowate zobaczyło tysiąc nowych twarzy i uruchomiło protokół bezpieczeństwa: TRZYMAJ SIĘ TEGO CO ZNASZ. Lęk separacyjny to ciało migdałowate, które nie odróżnia 'nowe przedszkole' od 'dżungla pełna drapieżników'.",
        statImpact: { n: 6, e: -4, o: -2 },
      },
      {
        id: "dec_2",
        text: "Wejdź pierwszy i zajmij najlepszą ławkę",
        hiddenStructure: "Jądro Ogoniaste",
        flavorReveal:
          "Jądro ogoniaste zobaczyło szansę: nowe terytorium, nowa hierarchia. U dzieci 'bycie pierwszym' jest źródłem silnej dopaminy — dlatego rywalizacja o kolejność jest tak intensywna.",
        statImpact: { e: 6, n: -2, a: -2, c: 1 },
      },
      {
        id: "dec_3",
        text: "Wejdź spokojnie i zapamiętaj drogę do toalety — priorytety",
        hiddenStructure: "Hipokamp",
        flavorReveal:
          "Hipokamp włączył tryb kartograficzny. Nowe miejsce = nowa mapa do zapamiętania. Pierwsze godziny w nowym miejscu to intensywna praca hipokampa — dlatego po przeprowadzce jesteś tak zmęczony.",
        statImpact: { o: 4, c: 3, n: -1 },
      },
    ],
  },

  {
    id: "evt_milestone_referat_dinozaury",
    sceneText:
      "12 stron referatu. Odręczne rysunki (T-Rex wygląda jak pies z dużą głową). Pani wywołuje do tablicy. 25 par oczu. Zapominasz jak masz na imię.",
    voices: [
      {
        structure: "Ciało Migdałowate",
        text: "25 PAR OCZU. Patrzą. WSZYSTKIE. Na CIEBIE. Czuję się jak gazela na sawannie. Gdzie drzwi?!",
      },
      {
        structure: "Kora Przedczołowa",
        text: "Em... zacznij od T-Rexa? Wszystkim się podobają T-Rexy... chyba? Nie jestem pewna. Mam 8 lat.",
      },
      {
        structure: "Wyspa",
        text: "Kolana. Trzęsą się. Żołądek też. To uczucie jakby ktoś trzymał rybę w brzuchu. Mokrą rybę.",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "Wybiegnij z klasy — dinozaury poczekają",
        hiddenStructure: "Ciało Migdałowate",
        flavorReveal:
          "Ciało migdałowate przejęło stery w 200 milisekund. 25 par oczu wpatrzonych w Ciebie to dla niego ten sam sygnał co spotkanie z drapieżnikiem. Nie rozróżnia 'zagrożenia życia' od 'wystąpienia publicznego'.",
        statImpact: { n: 7, e: -5, c: -3 },
      },
      {
        id: "dec_2",
        text: "Zaimprowizuj monolog o T-Rexie jak stand-uper",
        hiddenStructure: "Jądro Ogoniaste",
        flavorReveal:
          "Jądro ogoniaste i kora zawarły sojusz. Improwizacja to współpraca układu nagrody z korą. Dopamina z reakcji publiczności może pokonać lęk sceniczny — dlatego niektórzy kochają stand-up.",
        statImpact: { e: 6, o: 4, n: -3, c: -2 },
      },
      {
        id: "dec_3",
        text: "Stój, czekaj aż minie, oddychaj przez mokrą rybę w brzuchu",
        hiddenStructure: "Wyspa",
        flavorReveal:
          "Wyspa zarejestrowała trzęsienie kolan, suche gardło, mokry żołądek. I zamiast uciekać — kazała stać i czuć. Zdolność do 'bycia z dyskomfortem' to jedna z ważniejszych umiejętności emocjonalnych. Insula to umożliwia.",
        statImpact: { a: 3, c: 3, n: 2 },
      },
    ],
  },

  {
    id: "evt_milestone_pierwszy_telefon",
    sceneText:
      "Dostajesz pierwszy smartfon. Ekran świeci jak miniaturowe słońce. Rodzice mówią 'tylko do nauki i dzwonienia'. Masz już 3 pomysły, które nie dotyczą ani nauki, ani dzwonienia.",
    voices: [
      {
        structure: "Jądro Ogoniaste",
        text: "FILMIKI Z KOTAMI. Nieskończoność filmików z kotami. Scrolluj. Scrolluj. SCROLLUJ. Sen jest opcjonalny.",
      },
      {
        structure: "Kora Przedczołowa",
        text: "Może zainstaluj Duolingo? Albo kalkulator? Coś... edukacyjnego? Rodzice będą dumni. Chyba. (Nie słucha mnie nikt.)",
      },
      {
        structure: "Wyspa",
        text: "Babcia nie dzwoniła od tygodnia. Może jej smutno. Czuję to gdzieś... tutaj. W klatce piersiowej.",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "3 godziny filmików z kotami — 'jeszcze jeden' x 847",
        hiddenStructure: "Jądro Ogoniaste",
        flavorReveal:
          "Jądro ogoniaste znalazło nieskończone źródło mikro-dopaminy. Każdy filmik trwa 15 sekund, każdy daje malusieńki zastrzyk nagrody. Krótkie filmiki idealnie eksploatują pętlę dopaminową: nieprzewidywalna nagroda + niski wysiłek = nieskończony scroll.",
        statImpact: { c: -5, n: 2, e: 2 },
      },
      {
        id: "dec_2",
        text: "Zainstaluj Duolingo i ucz się japońskiego (na początek)",
        hiddenStructure: "Kora Przedczołowa",
        flavorReveal:
          "Kora przedczołowa wygrała ten round. Gratyfikacja odroczona: 'nauczę się japońskiego' zamiast 'obejrzę kota'. Kora odpowiada za odraczanie gratyfikacji. U 12-latka ta zdolność istnieje, ale jest krucha.",
        statImpact: { c: 5, o: 4, n: -2 },
      },
      {
        id: "dec_3",
        text: "Zadzwoń do babci — coś Ci mówi że powinieneś",
        hiddenStructure: "Wyspa",
        flavorReveal:
          "Wyspa wysłała sygnał — nie z głowy, z klatki piersiowej. 'Przeczucie' że komuś jest smutno to dosłownie insula interpretująca subtelne sygnały: wspomnienia, kontekst, emocje. Babcia odebrała po 0.3 sekundy.",
        statImpact: { a: 6, e: 2 },
      },
    ],
  },

  // ═══════════════════════════════════════════
  // MILESTONES · ADOLESCENCJA (13–18)
  // ═══════════════════════════════════════════

  {
    id: "evt_milestone_klotnia_rodzic",
    sceneText:
      "Chcesz wyjść. Rodzic mówi 'nie'. Mówisz 'dlaczego'. Mówi 'bo nie'. I w tym momencie odkrywasz nowe uczucie: czystą, krystaliczną FURIĘ wobec kogoś, kogo kochasz.",
    voices: [
      {
        structure: "Ciało Migdałowate",
        text: "NIESPRAWIEDLIWOŚĆ. TO JEST NIESPRAWIEDLIWE. Serce wali, ręce się trzęsą, MUSISZ to powiedzieć GŁOŚNO. TERAZ.",
      },
      {
        structure: "Kora Przedczołowa",
        text: "Spokojnie... może jak poczekasz godzinę i zapytasz jeszcze raz... nie? Nikt nie słucha? Ok.",
      },
      {
        structure: "Wyspa",
        text: "Coś ściska w gardle. To nie tylko złość. To... rozczarowanie? Smutek? Wszystko naraz?",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "Trzaśnij drzwiami tak mocno, że spadnie obrazek w korytarzu",
        hiddenStructure: "Ciało Migdałowate",
        flavorReveal:
          "Ciało migdałowate przejęło pełną kontrolę. U nastolatków jest bardziej reaktywne niż u dorosłych, a kora przedczołowa nie jest jeszcze dojrzała. To neurologiczny przepis na gwałtowne reakcje na pozornie drobne sytuacje.",
        statImpact: { n: 7, a: -6, c: -3 },
      },
      {
        id: "dec_2",
        text: "Weź głęboki oddech i powiedz 'mogę przynajmniej wiedzieć dlaczego?'",
        hiddenStructure: "Kora Przedczołowa",
        flavorReveal:
          "Kora przedczołowa u 13-latka jest w szczycie 'remontu' (pruning synaptyczny). Jest mniej efektywna niż u dziecka i daleko od dorosłej sprawności. Każda racjonalna reakcja w tym wieku to mały cud neurologiczny.",
        statImpact: { a: 4, c: 4, n: -2 },
      },
      {
        id: "dec_3",
        text: "Zamknij się w pokoju i nie mów nic — niech poczują ciszę",
        hiddenStructure: "Wyspa",
        flavorReveal:
          "Wyspa przejęła stery w najcichszy sposób. Cisza jako kara to insula w trybie pasywno-agresywnym: 'czuję że Ci zależy, więc dam Ci brak mojej obecności'. Insula odpowiada za świadomość emocji — swoich i cudzych.",
        statImpact: { n: 4, e: -4, a: -2 },
      },
    ],
  },

  {
    id: "evt_milestone_wielka_milosc",
    sceneText:
      "Obóz letni. Ostatni dzień. Wymieniliście się numerami telefonów — w erze smartfonów to jak wymiana obrączek. Autobus za godzinę. Czujesz coś w żołądku, czego żadna lekcja biologii nie potrafiła wyjaśnić.",
    voices: [
      {
        structure: "Jądro Ogoniaste",
        text: "Napisz TERAZ. Dopamina spada. Musisz przedłużyć ten stan. NAPISZ. Wyślij serce. Dwa serca. Pięć serc. EMOTIKONĘ Z OCZAMI.",
      },
      {
        structure: "Hipokamp",
        text: "Zapisz ten zapach. Sosny. Ognisko. Szampon truskawkowy. Będziesz tego potrzebować w grudniu, kiedy będzie zimno i smutno.",
      },
      {
        structure: "Kora Przedczołowa",
        text: "Spokojnie. To obóz letni. Statystycznie 94% takich znajomości kończy się w październiku. Nie mówię że to nie jest prawdziwe, mówię że... a, nieważne.",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "Wyślij wiadomość od razu — '❤️❤️❤️ już tęsknię' (bus jeszcze nie odjechał)",
        hiddenStructure: "Jądro Ogoniaste",
        flavorReveal:
          "Jądro ogoniaste nie toleruje spadku dopaminy. Zakochanie aktywuje te same ścieżki dopaminowe co uzależnienie. Mózg 15-latka nie odróżnia miłości od obsesji — jądro ogoniaste odpowiada za 'chasing the high'.",
        statImpact: { e: 7, n: 3, c: -4 },
      },
      {
        id: "dec_2",
        text: "Schowaj numer. Nie pisz. Niech wspomnienie zostanie piękne",
        hiddenStructure: "Hipokamp",
        flavorReveal:
          "Hipokamp podjął strategiczną decyzję: lepsze wspomnienie idealne niż rzeczywistość rozczarowująca. Hipokamp 'edytuje' wspomnienia przy każdym odtwarzaniu — idealizowane wspomnienie staje się piękniejsze z czasem.",
        statImpact: { o: 5, n: 2, e: -2 },
      },
      {
        id: "dec_3",
        text: "Pożegnaj się chłodno — 'to był fajny obóz, nara'",
        hiddenStructure: "Kora Przedczołowa",
        flavorReveal:
          "Kora przedczołowa próbowała zagrać dorosłą. 'Udawanie że nic nie czujesz' to niedojrzała forma regulacji emocji — skuteczna krótkoterminowo, kosztowna długoterminowo. U 15-latka kora robi co może.",
        statImpact: { c: 3, e: -3, o: -2, a: -3 },
      },
    ],
  },

  {
    id: "evt_milestone_pierwsza_impreza",
    sceneText:
      "Sobota. Ktoś z klasy urządza imprezę. Rodzice wyjechali. SMS: 'Będą wszyscy'. Twoi rodzice pytają 'czyje to urodziny?' Mówisz 'Ani'. Żadna Ania nie ma urodzin. Nie masz Ani w klasie.",
    voices: [
      {
        structure: "Jądro Ogoniaste",
        text: "IMPREZA. Muzyka. Ludzie. WSZYSTKO. To będzie LEGENDARNE. Ubieraj się. Ubieraj się TERAZ.",
      },
      {
        structure: "Ciało Migdałowate",
        text: "A co jeśli nikt z Tobą nie będzie gadał? Co jeśli staniesz pod ścianą? CO JEŚLI NIE ZNASZ ŻADNEJ PIOSENKI?",
      },
      {
        structure: "Kora Przedczołowa",
        text: "Skłamałeś rodzicom. To... nie jest idealnie. Ale... wszyscy tak robią? Chyba? Nie mam na ten temat danych.",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "Idź i bądź duszą towarzystwa (próbuj przynajmniej)",
        hiddenStructure: "Jądro Ogoniaste",
        flavorReveal:
          "Jądro ogoniaste dostało jackpot sensoryczny. U nastolatków akceptacja rówieśnicza aktywuje układ nagrody silniej niż u dorosłych — dlatego 'bycie na imprezie' jest ważniejsze niż 'co na imprezie robisz'.",
        statImpact: { e: 8, n: -3, o: 3, c: -3 },
      },
      {
        id: "dec_2",
        text: "Idź, ale stój pod ścianą z telefonem — bezpieczna odległość",
        hiddenStructure: "Ciało Migdałowate",
        flavorReveal:
          "Ciało migdałowate zawarło kompromis: idź, ale TRZYMAJ DYSTANS. Telefon to tarcza. Ściana to sojusznik. Ciało migdałowate przetwarza sytuacje społeczne u nastolatków jako potencjalne zagrożenia.",
        statImpact: { n: 4, e: -2, o: -1 },
      },
      {
        id: "dec_3",
        text: "Zostań w domu, powiedz rodzicom prawdę, obejrzyj film",
        hiddenStructure: "Kora Przedczołowa",
        flavorReveal:
          "Kora przedczołowa podjęła decyzję graniczącą z heroizmem u 16-latka: prawda + rezygnacja z presji społecznej. FOMO to układ nagrody sygnalizujący 'inni dostają dopaminę, a Ty nie'.",
        statImpact: { c: 6, a: 3, e: -4, n: 2 },
      },
    ],
  },

  {
    id: "evt_milestone_wybor_kierunku",
    sceneText:
      "Formularz rejestracyjny na studia. 3 pola: kierunek 1, 2, 3. Masz 45 minut. Rodzice mają 'sugestie'. Doradca zawodowy powiedział 'rób to co kochasz'. Kochasz spanie.",
    voices: [
      {
        structure: "Hipokamp",
        text: "Pamiętasz referat o dinozaurach? Rok 8? Czułeś coś wtedy. Może... paleontologia? Albo biologia? Albo... cokolwiek co nie jest ekonomią?",
      },
      {
        structure: "Kora Przedczołowa",
        text: "Przeanalizujmy: zarobki, perspektywy, ranking uczelni... nie, czekaj, to za dużo zmiennych. Nawet ja nie ogarniam. A MUSZĘ ogarnąć.",
      },
      {
        structure: "Jądro Ogoniaste",
        text: "Informatyka! Kolega mówi że po IT zarabiasz miliony! MILIONY! Wyobraź sobie tyle dopaminy!",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "Wybierz to co Cię fascynuje, nawet jeśli babcia powie 'z tego nie wyżyjesz'",
        hiddenStructure: "Hipokamp",
        flavorReveal:
          "Hipokamp sięgnął przez lata wspomnień i wyciągnął momenty gdy czas płynął szybciej niż zwykle. 'Podążaj za pasją' to de facto 'podążaj za tym, co hipokamp oznaczył jako emocjonalnie ważne'. Problem: hipokamp nie analizuje rynku pracy.",
        statImpact: { o: 7, n: 2 },
      },
      {
        id: "dec_2",
        text: "Wybierz najbardziej 'pewny' kierunek — przyszłość ważniejsza niż pasja",
        hiddenStructure: "Kora Przedczołowa",
        flavorReveal:
          "Kora przedczołowa zrobiła analizę: zarobki, perspektywy, stabilność. Paradoksalnie, 'racjonalna' decyzja 17-latka opiera się na niekompletnych danych — 17-latek nie wie jeszcze kim będzie za 5 lat.",
        statImpact: { c: 6, o: -3, n: -1 },
      },
      {
        id: "dec_3",
        text: "Wpisz 'informatyka' bo kolega powiedział że po IT zarabiasz miliony",
        hiddenStructure: "Jądro Ogoniaste",
        flavorReveal:
          "Jądro ogoniaste usłyszało 'miliony' i wyłączyło resztę mózgu. Reaguje na OBIETNICĘ nagrody silniej niż na samą nagrodę. 'Po IT miliony' to sygnał dopaminowy tak silny, że zagłusza pytanie 'ale czy Ci się podoba?'.",
        statImpact: { e: 3, c: -2 },
      },
    ],
  },

  {
    id: "evt_milestone_matura",
    sceneText:
      "Wchodzisz na salę. Otwierasz arkusz. 'Oblicz granicę funkcji...' Mózg robi factory reset.",
    voices: [
      {
        structure: "Ciało Migdałowate",
        text: "O nie. Nie nie nie. Widziałem ten arkusz. UCIEKAJ. Wyjście awaryjne jest po lewej.",
      },
      {
        structure: "Kora Przedczołowa",
        text: "Em... oddychaj? Mamy na to 180 minut. Chyba wystarczy... nie?",
      },
      {
        structure: "Hipokamp",
        text: "Chwila. Ten wzór. Widziałem go w zeszycie. Strona 47, prawy margines, obok rysunku kota.",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "Oddaj pustą kartkę i wyjdź z sali",
        hiddenStructure: "Ciało Migdałowate",
        flavorReveal:
          "Ciało migdałowate przejęło stery. Uruchamia reakcję walcz-lub-uciekaj w 200ms — szybciej niż świadoma myśl. Serce waliło, ręce się trzęsły — klasyczna kapitulacja ze stresu.",
        statImpact: { n: 10, e: -3, c: -5 },
      },
      {
        id: "dec_2",
        text: "Oddychaj. Zacznij od najłatwiejszego zadania",
        hiddenStructure: "Kora Przedczołowa",
        flavorReveal:
          "Kora przedczołowa przejęła kontrolę — ale ledwo. W wieku 18 lat to wciąż młody głos. Kora odpowiada za planowanie i kontrolę impulsów. Pełnię mocy osiąga dopiero ok. 25. roku życia.",
        statImpact: { c: 8, n: -3 },
      },
      {
        id: "dec_3",
        text: "Przypomnij sobie nocne powtórki — to gdzieś w głowie jest",
        hiddenStructure: "Hipokamp",
        flavorReveal:
          "Hipokamp sięgnął w głąb archiwum. Nie od razu — najpierw zapach kawy z nocnej sesji, potem zeszyt, potem wzór. Odzyskiwanie wspomnień często zaczyna się od kontekstu: zapachu, miejsca, emocji towarzyszącej nauce.",
        statImpact: { o: 6, c: 4, n: -2 },
      },
    ],
  },

  // ═══════════════════════════════════════════
  // RANDOM EVENTS · 0–18
  // ═══════════════════════════════════════════

  {
    id: "evt_random_potwor_pod_lozkiem",
    sceneText:
      "Jest 2:00 w nocy. Coś skrzypnęło pod łóżkiem. Prawdopodobnie to drewno. Prawdopodobnie. Ale ciało migdałowate mówi: 'a co jeśli to POTWÓR?'",
    voices: [
      {
        structure: "Ciało Migdałowate",
        text: "POTWÓR. POD ŁÓŻKIEM. MA ZĘBY. Nie wiem ile, ale NA PEWNO dużo. NIE OPUSZCZAJ NÓG Z ŁÓŻKA.",
      },
      {
        structure: "Wzgórze",
        text: "Zarejestrowano: dźwięk (skrzypienie), wizualnie ciemno, temperatura normalna, źródło: podłoga. Przekazuję bez komentarza.",
      },
      {
        structure: "Hipokamp",
        text: "Wczoraj Bartek opowiedział historię o potworze pod łóżkiem. DLACZEGO TO ZAPAMIĘTAŁEM.",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "KRZYCZ 'MAMAAAAAA' na cały dom",
        hiddenStructure: "Ciało Migdałowate",
        flavorReveal:
          "Ciało migdałowate uruchomiło alarm na pełną moc. Skrzypienie + ciemność = zagrożenie = WRZASK. U małych dzieci ciało migdałowate jest ekstremalnie reaktywne, bo kora przedczołowa nie potrafi jeszcze 'sprawdzić' czy alarm jest uzasadniony.",
        statImpact: { n: 5, e: 2 },
      },
      {
        id: "dec_2",
        text: "Zakryj się kołdrą po sam czubek głowy — kołdra jest niezniszczalna",
        hiddenStructure: "Wzgórze",
        flavorReveal:
          "Wzgórze przetworzyło sytuację pragmatycznie: jest ciemno = nie widzisz potwora. Kołdra = eliminacja bodźca wzrokowego. Wzgórze filtruje bodźce zmysłowe — zakrycie się kołdrą to prymitywna forma 'filtrowania'. Mniej bodźców = mniej strachu.",
        statImpact: { n: 2, e: -2 },
      },
      {
        id: "dec_3",
        text: "Wyjrzyj za krawędź łóżka — sprawdź",
        hiddenStructure: "Hipokamp",
        flavorReveal:
          "Hipokamp próbował sprawdzić wspomnienie z prawdą. Bartek mówił o potworze. Ale Bartek też mówił że umie latać. Hipokamp porównuje nowe doświadczenia ze wspomnieniami — to forma weryfikacji pamięci.",
        statImpact: { o: 5, n: -3, c: 2 },
      },
    ],
  },

  {
    id: "evt_random_niesprawiedliwa_ocena",
    sceneText:
      "Sprawdzian z matmy. Dostałeś 2. Bartek dostał 4. Bartek ściągał. WIDZIAŁEŚ jak ściągał. Świat nie jest sprawiedliwy i masz na to dowód.",
    voices: [
      {
        structure: "Ciało Migdałowate",
        text: "NIESPRAWIEDLIWOŚĆ. TO JEST SKANDAL. Serce wali. Ręce się trzęsą. BARTEK ŚCIĄGAŁ A DOSTAŁ 4. ŚWIAT SIĘ PALI.",
      },
      {
        structure: "Wyspa",
        text: "Czuję to w brzuchu. To nie jest złość. To jest... zranienie? Coś jak kiedy ktoś wziął ostatnie ciastko, ale gorzej.",
      },
      {
        structure: "Kora Przedczołowa",
        text: "Hm... może podejdź do pani i powiedz? Spokojnie? Bez krzyku? Spróbuj?",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "Krzycz 'BARTEK ŚCIĄGAŁ!' na całą klasę",
        hiddenStructure: "Ciało Migdałowate",
        flavorReveal:
          "Ciało migdałowate reaguje na niesprawiedliwość podobnie jak na zagrożenie fizyczne — wzrasta tętno, napięcie mięśni, gotowość do działania. U dzieci ta reakcja jest silniejsza, bo kora nie umie jej jeszcze modulować.",
        statImpact: { n: 5, e: 3, a: -5 },
      },
      {
        id: "dec_2",
        text: "Nie mów nic. Połknij to. Czujesz to gdzieś głęboko w brzuchu",
        hiddenStructure: "Wyspa",
        flavorReveal:
          "Wyspa zarejestrowała ból — nie fizyczny, emocjonalny. 'Ból niesprawiedliwości' aktywuje podobne regiony co prawdziwy ból. 'Boli mnie' gdy ktoś jest niesprawiedliwy to nie metafora — to neurobiologia. Insula to przetwarza.",
        statImpact: { n: 3, e: -3, a: 4 },
      },
      {
        id: "dec_3",
        text: "Podejdź do pani po lekcji i powiedz spokojnie co widziałeś",
        hiddenStructure: "Kora Przedczołowa",
        flavorReveal:
          "Kora przedczołowa zaproponowała: poczekaj, przemyśl, podejdź po lekcji. 7-latek, który potrafi odroczyć reakcję o 45 minut? To neurologiczny wyczyn. Każde opóźnienie reakcji to trening kory na przyszłość.",
        statImpact: { c: 5, n: -2, a: 1 },
      },
    ],
  },

  {
    id: "evt_random_nocowanie_u_kolegi",
    sceneText:
      "Piżama party u Kuby. Pizza, filmy, granie do rana. Jest 23:00. Wszyscy się bawią. Ty leżysz w śpiworze i myślisz o swojej poduszce. I o mamie. I o psie. I o swojej poduszce jeszcze raz.",
    voices: [
      {
        structure: "Ciało Migdałowate",
        text: "To nie jest Twoje łóżko. To nie jest Twoja poduszka. Ten śpiwór PACHNIE INACZEJ. Coś jest nie tak. Chcę do domu.",
      },
      {
        structure: "Jądro Ogoniaste",
        text: "Ale pizza! I gry! I nie trzeba spać! To jest RAJ. Nie psuj tego tym tęsknieniem.",
      },
      {
        structure: "Wyspa",
        text: "Coś ściska w klatce piersiowej. To nie ból. To tęsknota. Jest ciepła i zimna jednocześnie.",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "Zadzwoń do mamy: 'zabierz mnie' (nie jest Ci źle, tęsknisz)",
        hiddenStructure: "Ciało Migdałowate",
        flavorReveal:
          "Ciało migdałowate zakwalifikowało 'obcy śpiwór + brak mamy' jako zagrożenie 7/10. Lęk separacyjny u 10-latka to ciało migdałowate, które nie odróżnia 'jestem w niebezpieczeństwie' od 'jestem daleko od domu'.",
        statImpact: { n: 5, e: -3, o: -2 },
      },
      {
        id: "dec_2",
        text: "Zagłusz tęsknotę kolejną rundą gry — dopamina zwycięży",
        hiddenStructure: "Jądro Ogoniaste",
        flavorReveal:
          "Jądro ogoniaste zaproponowało plan B: zamień tęsknotę na dopaminę. Kolejna runda, kolejny level. Jądro ogoniaste może 'zagłuszać' sygnały lękowe z ciała migdałowatego — nagroda blokuje strach.",
        statImpact: { e: 4, o: 2, c: -2 },
      },
      {
        id: "dec_3",
        text: "Leż w śpiworze, poczuj tęsknotę, oddychaj — przejdzie",
        hiddenStructure: "Wyspa",
        flavorReveal:
          "Wyspa zarejestrowała ścisk w klatce, zapach obcego śpiwora, brak mamy. I zamiast reagować — kazała leżeć i czuć. Zdolność do 'bycia z trudną emocją' to fundament regulacji emocjonalnej. U 10-latka to rzadka umiejętność.",
        statImpact: { o: 3, a: 2, c: 3, n: -2 },
      },
    ],
  },

  {
    id: "evt_random_instagram_porownanie",
    sceneText:
      "Jest 1:00 w nocy. Scrollujesz Instagrama. Kasia jest na Bali. Bartek ma mięśnie. Zuzia ma 2000 followerów. Ty masz piżamę w misie i jutro kartkówkę z biologii.",
    voices: [
      {
        structure: "Jądro Ogoniaste",
        text: "Jeszcze jeden scroll. JESZCZE JEDEN. Może następne zdjęcie będzie fajne. Albo następne. Albo na—",
      },
      {
        structure: "Wyspa",
        text: "Czujesz to? Ten ścisk? To nie głód. To porównywanie się. I przegrywasz w grze, w której nikt nie wygrywa.",
      },
      {
        structure: "Kora Przedczołowa",
        text: "Jest 1:00 w nocy. Jutro kartkówka. Telefon w dół. Proszę. PROSZĘ. (Nikt mnie nie słucha. Jak zwykle.)",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "Scrolluj dalej — sen jest dla słabych, Instagram dla silnych",
        hiddenStructure: "Jądro Ogoniaste",
        flavorReveal:
          "Jądro ogoniaste wygrało. Nieskończony scroll to pętla dopaminowa — każde zdjęcie to mikro-nagroda. Algorytm mediów społecznościowych eksploatuje pętlę nagrody: losowa nagroda + niski wysiłek = idealna pułapka.",
        statImpact: { n: 5, c: -5, e: -2, a: -2 },
      },
      {
        id: "dec_2",
        text: "Odłóż telefon i nazwij to co czujesz — to ściskanie to nie głód",
        hiddenStructure: "Wyspa",
        flavorReveal:
          "Wyspa przerwała pętlę. 'Nazwanie' emocji (affect labeling) zmniejsza aktywność ciała migdałowatego. Samo powiedzenie 'jestem zazdrosny' zamiast 'jest mi źle' obniża intensywność uczucia o ok. 30%.",
        statImpact: { o: 4, a: 2, c: 2, n: -1 },
      },
      {
        id: "dec_3",
        text: "Zamknij Instagram, otwórz podręcznik — kartkówka ważniejsza niż Kasia na Bali",
        hiddenStructure: "Kora Przedczołowa",
        flavorReveal:
          "Kora przedczołowa u nastolatka rywalizuje z układem nagrody, który jest już w pełni dojrzały. To nierówna walka — jak bokser wagi piórkowej przeciwko ciężkiej. Każde zwycięstwo kory w tym wieku to trening na przyszłość.",
        statImpact: { c: 6, n: -2 },
      },
    ],
  },

  {
    id: "evt_random_energetyk_sprawdzian",
    sceneText:
      "Jutro sprawdzian z chemii. Nie otworzyłeś podręcznika od... października? Na biurku dwie puszki Monstera. Jest 22:00. Plan: wypić, nauczyć się, zdać. Co może pójść nie tak?",
    voices: [
      {
        structure: "Jądro Ogoniaste",
        text: "Otwórz puszkę. Poczujesz MOC. Będziesz MASZYNĄ. Kofeina + tauryna = GENIUSZ. Na pewno. Otwieraj. OTWIERAJ.",
      },
      {
        structure: "Kora Przedczołowa",
        text: "To jest 7 godzin do sprawdzianu. Realnie: ogarniesz 3 rozdziały. Nie idealne, ale lepsze niż nic. Bez puszek.",
      },
      {
        structure: "Wyspa",
        text: "Żołądek mówi 'nie'. Może dlatego że ostatnim razem po 2 puszkach trzęsły Ci się ręce 6 godzin?",
      },
    ],
    decisions: [
      {
        id: "dec_1",
        text: "Dwie puszki, muzyka na full, kuj do świtu — BEAST MODE",
        hiddenStructure: "Jądro Ogoniaste",
        flavorReveal:
          "Jądro ogoniaste dostało dawkę kofeiny i tauryny. Kofeina blokuje receptory adenozyny, sztucznie zwiększając dopaminę. Efekt krótkotrwały — potem 'crash': spadek koncentracji, drżenie rąk, kołatanie serca.",
        statImpact: { n: 5, e: 2, c: -3, a: -2 },
      },
      {
        id: "dec_2",
        text: "Odłóż puszki, zrób plan i ucz się ile zdążysz — strategia > kofeina",
        hiddenStructure: "Kora Przedczołowa",
        flavorReveal:
          "Kora przedczołowa przejęła stery. 'Strategic satisficing' — wybieranie 'wystarczająco dobrze' zamiast 'idealnie'. To dojrzała forma planowania, która u nastolatka wymaga heroicznego wysiłku, bo jądro ogoniaste krzyczy 'WSZYSTKO ALBO NIC!'.",
        statImpact: { c: 7, n: -2 },
      },
      {
        id: "dec_3",
        text: "Wsłuchaj się w żołądek — on pamięta co było ostatnio",
        hiddenStructure: "Wyspa",
        flavorReveal:
          "Wyspa przypomniała: ostatnim razem po 2 puszkach wymiotowałeś o 4 rano. Ciało ma 'pamięć somatyczną' — zapamiętuje negatywne doświadczenia niezależnie od świadomej pamięci. Dlatego sam zapach pewnych substancji może wywoływać mdłości.",
        statImpact: { o: 3, a: 2, c: 2 },
      },
    ],
  },
];
