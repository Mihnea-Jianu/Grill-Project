# Utilizare

Pentru a rula aplicația, trebuie clonat repoul într-un director local. Acolo, se va deschide un terminal în folderul de frontend, unde se va rula comanda:
npm start

# Ce taskuri am reușit să fac (more or less)

## Homepage

Homepage-ul este făcut astfel încât să arate diferit în funcție de login-state-ul utilizatorului.

## Header și Footer

Headerul și footerul sunt făcute astfel încât să apară pe fiecare pagină. De asemenea headerul este stateful, astfel schimbă ce butoane sunt
vizibile în funcție de login-state. Pentru un utilizator nelogat, sunt vizibile butoanele de homepage, best grills, login și register.
Pentru un utilizator logat, butoanele de login și register dispar, aparând în locul lor butoane pentru delogare respectiv pentru a accesa
pagina de profil a unui utilizator.
Footerul conține linkuri către toate rețelele sociale ale ligii.

## Register (doar frontend)

Pagina de register prezintă un formular "de carton", întrucât nu am implementat o bază de date pentru utilizatori. Butonul de sign up, în schimb,
face ce ar trebui să facă la un nivel de frontend, adică (după o presupusă creare a unui cont) trimite utilizatorul către pagina de login, pentru
a se autentifica în contul său nou.

## Login (doar frontend)

La fel ca la pagina de reister formularul de login este de carton. În schimb butonul de login funcționează cum ar trebui la nivel de frontend.
Când un utilizator îl apasă, acesta este "autentificat" și este trimis la pagina sa de profil, care este incaccesibilă fără ca utilizatorul să
fi trecut prin procesul de login. De asemenea am adăugat linkuri către pagina de sign up, în cazul în care un utilizator care nu are cont ajungea
din greșeală la pagina de login. Am implementat și frontendul formularului de parolă uitată, dar acesta de asemenea nu funcționează.

## Pagina de profil și formularul de creare de postări

Am implementat doar frontendul, din acest motiv lista de grătare nu conține nimic. Butonul de creare de postare funcționează, acesta trimite utilizatorul
către formularul pentru crearea postărilor. Câmpurile acestuia nu funcționează totuși.

# Implementări

De-a lungul implementării diferitelor funcționalități ale aplicației mi-am schimbat strategia de mai multe ori, realizând pe parcurs
cât de ineficientă și nescalabilă era strategia precedentă.

Basically pentru fiecare pagină în parte, și pentru fiecare element care se poate regăsi pe mai multe pagini, am decis să fac un
fișier .js care să returneze codul jsx pentru acel element. Ideea pe care am mers a fost că am declarat o variabilă booleană pentru login-state
și un string care să țină minte pagina curentă. Deoarece voiam ca react să re-randeze site-ul atunci când aceste valori se schimbă, am
folosit useState din librăria react.

Apoi am decis că voi include tagurile ce conțin fiecare pagină direct în funcția App, si că voi transmite fiecărui tag, ca parametrii, login-state-ul
și pagina curentă. Apoi la nivelul funcțiilor ce returnează tagurile (care primesc ca parametrii login-state-ul și pagina curentă) verific dacă
pagina respectivă trebuie afișată sau nu (dacă pathul paginii este același cu pathul paginii curente). Dacă o pagină nu trebuie afișată îi adaug
display: none la style.
Am realizat mai târziu că există metode mai simple de a face exact același lucru, dar am decis să le folosesc cu următoarea ocazie, în loc să stau
să schimb totul.

Am încercat să fac totul cât mai scalabil, evitând hardcodări în locuri unde codul de jsx devenea mai stufos. În loc să scriu conținutul, clasa, style-ul etc.
al unui tag în jsx, parametrizam toate aceste lucruri folosind structuri de date în codul de js. Asta înseamnă de asemenea că puteam să parametrizez taguri întregi,
precum tagul Form, pe care l-am creat pentru a construi toate formularele din aplicație.

Sincer, chiar dacă nu am reușit nici pe departe să termin proiectul, mi-a plăcut foarte mult să lucrez la el, să mă uit la tutoriale pe x2 speed, și să
încerc să fac totul din mers. :D
Am învățat multe despre frameworkuri și API-uri de web de care nu știam, și de asemenea cât de bine se poate lucra cu acestea.
