### Witaj w Luna Farm!

Jestem zaszczycony możliwością udziału w waszym procesie rekrutacyjnym!
Krótko o aplikacji, została ona napisana zgodnie z dokumentacją zawartą w pliku README.md aczkolwiek zamiast przenoszenia użytkownika na osobne strony na których dostepne będą poszczególne funkcje zawarłem całą funkcjonalność na stronie głownej która zarządzana jest globalnym stanem animacji dzięki czamu ogólny ux jest o wiele lepszy.

# Zasady działania pobierania listy modułów

Dane są pobierane za pomocą RRD loadera w komponencie wyświetlania modółow skąd są aktualizowane poprzez react context hook w pliku FarmContext.jsx. Każdy modół w liście zawiera Link tag który akutalizuje ścieżke strony wrzucając id modułu do ścieżki strony oraz aktualizuje globalny stan animacji który otwiera karte z szczegółami modułu

# Zasady działania komponentu szegółow modułu

Szczegóły modułu są pobierana za pomocą funckcji zawartej w pliku FarmContext.jsx
poprzez przekazanie id modułu z ścieżki strony zapomocą RRD hooka useParams. Następnie wszystkie dane są przekazywane do Input elementów za pomocą paczki npm react-hook-form co pozwala nam na wyświetlenie ich oraz edycje oraz walidacje w czasie rzeczywistym. W karcie mamy 3 guziki jeden w lewym górym rogu który pozwala na zamkniecie karty, dwa w prawym górnym rogu które odpowiedzialne są za nastepująco uruchomienie modu edycji oraz na wyświetlenie danych historycznych danego modułu. Guzik edycji wyświetla na stronie guziki edycji które po naciśnieciu odblokowywują możliwość edycji przypisanych do nich pól. Guzik historii zamyka podgląd listy modułów oraz szczególów modułu i wyświetla karte histrii moduły.

# Zasady działania komponentu historii

Na karcie historii modułu znajdują się w prawym górnym rogu guzik który zamyka podgląd historii i powraca do oryginalnego widoku szegółów modułu. Po lewej stronie znajdują sie 3 pola oraz guzik wyszukiwania który po kliknięciu uruchamia funkcjie która sprawdza czy pola są wyoełnione jeśli tak pobiera dane historczne modułu bazując na danych które zostały podane w polach. Finalnie dane są odzwierciedlane na diagramie linowym który zostam zimplementowany za pomocą npm paczki Charts.js

### Podsumowanie

Mam nadzieje że napisanie tej aplikacji pozwoli na pokazanie moich umiejętności oraz chęci udziału w dalszym procesie rekrutacji. W razie jakichkolwiek wątpliwości co do moich możliwości prosiłbym o kontakt mailowy mkocik.dev@gmail.com. Chciałem dodać jeszcze logike autoryzacji użytkownika ale ze wzgledu na zbliżający się deadline nie zrobie tego aczkolwiek gdyby jednak deadline mógłby być nagięty prosiłbym o informacje a zabiorę się do pracy. Mam nadzieje że wszystko wytłumaczyłem prawidłowo a moja aplikacja spęłnia wszystkie oczekiwania

# Paczki npm użyte do napisania aplikacji :

Phosphor-icons
Charts.js
React.js
React-hook-form
React-router-dom
Sass
Vite

# Instrukcje

uruchomienie frontendowej aplikacji

npm run dev
