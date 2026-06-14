---
title: 'Inżynieria oprogramowania z agentami AI - warsztat end-to-end'
createdAt: '2026-06-04'
updatedAt: '2026-06-04'
published: true
description: 'Warsztat o tym, jak ustawić repo, architekturę, narzędzia, proces i organizację pod powtarzalną pracę z agentami AI.'
banner: './banner.png'
bannerAlt: 'Claude Code standardizing agent work in a monorepo'
---

Jak ustawić cały cykl wytwarzania oprogramowania - repo, architekturę, narzędzia, proces i organizację - tak, żeby praca z agentami była powtarzalna, bezpieczna i dawała kod, który da się utrzymać. Stopniowe przejście w stronę AI-first: od diagnozy stanu obecnego po propagację w organizacji.

Większość zespołów ma już dostęp do narzędzi AI, ale nadal pracuje ad hoc: ktoś pisze z czatem w przeglądarce, ktoś inny odpala agenta w terminalu, a nikt nie ustalił, jak robić to wspólnie, powtarzalnie i bezpiecznie. Problem rzadko leży w licencjach. Częściej chodzi o brak workflow, brak standardów w repo i duże różnice w know-how.

Warsztat obejmuje cały cykl: diagnozę, standaryzację repo, architekturę pod agentów, dobór narzędzi, codzienną pracę z agentami, proces jakości, stopniowe wdrażanie i propagację w organizacji. Punkt ciężkości to setup i proces, nie samo promptowanie. Celem jest powtarzalny i utrzymywalny engineering z AI, a nie jednorazowy vibecoding, który działa do pierwszej większej zmiany.

Podejście jest minimalistyczne: zaczynamy od najmniejszej rzeczy, która usuwa wasze wąskie gardło, i rozbudowujemy setup tylko wtedy, gdy to się zwraca - bez budowania wielkiego frameworka na zapas. Człowiek zostaje odpowiedzialny za decyzje inżynierskie i za to, co trafia na produkcję.

## Dla kogo

- Zespoły inżynierskie, które używają już narzędzi AI, ale chcą przejść od "mamy licencje na narzędzia" do "mamy workflow".
- Tech leadów, staff/principal engineerów i EM-ów, którzy mają to odpowiedzialnie wdrożyć w wielu zespołach.
- Środowiska regulowane i wrażliwe na bezpieczeństwo, w których agent ma być produktywny, ale pod kontrolą.
- Pojedyncze osoby i małe zespoły, które chcą przejść z poziomu "chat i autocomplete" do pracy z agentami w repo (w lżejszym formacie).

## Co z tego wynosicie

- Obraz tego, gdzie jesteście dziś i jak wygląda dojrzały setup w 2026, z waszą pozycją na drabinie dojrzałości.
- Strategię narzędzi i modeli, która przetrwa zmiany cen i słabsze okresy modeli: jawny wybór modelu, ścieżka fallbacku, własny zestaw zadań referencyjnych do porównań.
- Plan na "gold standard repo", w którym agent potrafi pracować - standardy plus architektura.
- Wzorce codziennej pracy: krojenie zadań, pętle plan-first, praca w izolowanych kopiach repo, kilku agentów naraz, uprawnienia.
- Proces review i jakości, który skaluje się razem z outputem agentów, zamiast stawać się wąskim gardłem.
- Guardraile bezpieczeństwa i governance dopasowane do waszego ryzyka.
- Plan na pierwsze tygodnie i kolejne miesiące, z właścicielami i jasną listą "czego jeszcze nie ruszać".
- Materiały startowe: publiczny starter repo-harness, lista narzędzi do ewaluacji (m.in. review boty) i źródła do śledzenia rynku.
- Wspólny język w zespole, który zmniejsza różnice w know-how.

## Program

Dziewięć modułów. Kolejność, waga i głębokość są dopasowywane do waszego stacku i dojrzałości.

### 1. Stan obecny i diagnoza

Jak wygląda dojrzały setup z agentami AI w 2026 i czym różni się vibecoding od craftowego engineeringu z AI. Gdzie zespoły się zacinają - zwykle nie na narzędziach, tylko na braku wspólnego workflow, standardów w repo i na dużych różnicach w know-how. Nazywamy, gdzie jesteście na drabinie dojrzałości (od "chat w przeglądarce", przez agenta w IDE i w terminalu, po subagentów i agentów w chmurze), żeby reszta programu miała punkt odniesienia.

### 2. Narzędzia i niezależność od dostawcy

Przegląd aktualnych narzędzi (Claude Code, Cursor, Copilot, Codex, Gemini CLI, Windsurf i spółka) oraz sposób ich dobierania, żeby nie być zakładnikiem jednego dostawcy ani słabszego okresu jednego modelu. Modele pricingu i ich pułapki (per-request vs per-token, Pro vs Enterprise), jawny wybór modelu zamiast trybu "auto" (który ukrywa użyty model, koszt i porównywalność wyników), oraz strategia fallbacku na 6-12 miesięcy.

### 3. Standaryzacja na poziomie projektu

Jak zrobić z repo coś, w czym agent umie pracować. `AGENTS.md` / `CLAUDE.md` jako mapa repo i miejsce na twarde zasady (non-negotiables), jak rozdzielić instrukcje firmowe, projektowe i osobiste bez duplikacji, czym są skille i kiedy mają sens, MCP vs CLI vs komendy, oraz wzorce dokumentacji, dzięki którym agent idzie po krokach zamiast zgadywać. I które konwencje trzeba mieć spisane, zanim wpuścicie AI do generowania kodu.

### 4. Architektura pod agentów

Dlaczego wyraźne warstwy, izolacja modułów i współdzielone kontrakty znaczą jeszcze więcej, gdy kod pisze agent. Jak wymuszać zasady w kilku warstwach (typy, testy, CI), a nie jednym wielkim linterem, co linter ogarnia, a czego nie, i na ile można polegać na dobrym nazewnictwie, a co trzeba dopowiedzieć w dokumentacji. Do tego semantyczne narzędzia (LSP, symbol search, bezpieczne refaktory), które nie pozwalają agentowi zgubić się w dużym codebase.

### 5. Praca z agentami

Codzienne wzorce: jak pokroić zadanie, żeby agent dobrze sobie z nim poradził, pętle plan-first, praca w worktree (izolowanej kopii repo do równoległej pracy), kilku agentów naraz, oraz kiedy pozwolić agentowi działać samodzielnie, a kiedy ma pytać człowieka. Browser automation i dostęp do runtime (np. read-only do bazy czy logów) jako normalna część workflow, oraz jak zarządzać kontekstem, żeby agent się w nim nie utopił.

### 6. Proces i jakość

Jak robić review kodu generowanego przez AI, nie stając się wąskim gardłem - bo review i QA nie skalują się liniowo z throughputem agentów. Warstwowe review i podejście shift-left, gdzie review boty pomagają, a gdzie nie, wyłapywanie driftu w dokumentacji, konwencjach, strukturze i CI, oraz jak rozpoznać, czy AI poprawia kod, czy go pogarsza.

### 7. Podejście AI-first - stopniowe wdrażanie

Jak dojść do setupu, w którym agent generuje kod przez większość czasu, bez przeinwestowania. Gdzie ma żyć wiedza prowadząca agenta, jak wygląda model dojrzałości i harness (środowisko plus wiedza, które prowadzą agenta), pętla audit-update-maintain, zasada "just enough documentation", oraz anty-patterny, przez które agent się gubi, a ludziom trudniej nawigować i poprawiać repo: jeden gigantyczny plik instrukcji, puste foldery docs "na przyszłość", ciężki zestaw polityk bez pilotów i danych.

### 8. Propagacja w organizacji

Jak przenieść to z jednego zespołu na wiele. Jak zespół wiodący daje przykład, nie stając się wąskim gardłem, jak zmniejszać różnice w know-how (od ludzi "od chatu" po ludzi "od autonomicznych agentów"), co standaryzować centralnie, a co zostawić zespołom, i jak zarządzać współdzielonymi artefaktami: skillami, komendami, rejestrem MCP, eval packami.

### 9. Wyjście z warsztatu - konkretne kroki

Wychodzicie z konkretnym planem wdrożenia: co zrobić w pierwsze 2-4 tygodnie, co w kolejne 2-3 miesiące, a czego jeszcze nie ruszać. Do tego kto co bierze na siebie (właściciel gold standard repo, standardów, kosztów i usage), sygnały sukcesu i porażki, oraz jasne kryteria, kiedy rozszerzać rollout, a kiedy się zatrzymać lub cofnąć.

## Bezpieczeństwo, compliance i governance

Wątek przewijający się przez moduły 2-6, szczególnie istotny w środowiskach regulowanych: klasyfikacja danych (kod, sekrety, PII, dane produkcyjne), trusted directories, reguły allow/deny dla narzędzi i ścieżek, branch protections i bezpieczne granice zapisu (np. tylko draft PR, brak merge przez agenta), network egress, audytowalność, prompt injection z zewnętrznych systemów (issue trackery, dokumenty, MCP), governance MCP oraz read-only dostęp do systemów runtime.

## Format i organizacja

- Forma: zdalnie lub on-site, jako zwarty warsztat w kilku sesjach albo dłuższe wsparcie hands-on.
- Warianty: warsztat dla zespołu, skupiony deep-dive na 2-3 modułach, albo bieżące wsparcie przy wdrażaniu (office hours, wspólne sesje przy kodzie, konsultacje podczas migracji).
- Dla pojedynczych osób i małych zespołów: skondensowana wersja skupiona na narzędziach, standardach projektu i wzorcach pracy z agentami.
- Zakres, głębokość, długość i wycenę ustalam po krótkim callu scopingowym, kiedy znam wielkość zespołu, stack i cele.

## Jak dopasowuję program

Ten sam program u dwóch firm może wyglądać inaczej, bo zaczynam od mapy waszego stanu "as is": jakie typy repo i systemów są w grze, które są krytyczne biznesowo, a które nadają się na bezpieczny poligon, gdzie dziś marnuje się najwięcej czasu, pieniędzy i uwagi, oraz które workflowy są najbardziej powtarzalne. Z tej mapy wychodzi wybór pierwszych projektów pilotażowych i waga poszczególnych modułów. Jedne zespoły potrzebują najwięcej czasu na standaryzację i architekturę, inne na proces, jakość i governance.

Najbardziej się przydam, gdy macie jedno repo i konkretne zadanie. Przyspieszam wtedy diagnozę i pomagam zaprojektować pierwszy powtarzalny wzorzec pracy. Własność standardów, wyjątków i ich utrzymania zostaje po waszej stronie.

## Następny krok

Jeśli to brzmi sensownie, umówmy krótki call (30-45 min): zmapujemy wasz setup i cele. Na tej podstawie wracam z propozycją - waga modułów, format, timeline i wycena.
