---
title: 'Narzędzia, których używam'
createdAt: '2021-05-29'
updatedAt: '2026-04-17'
published: true
description: 'Zestaw narzędzi, który wypracowałem sobie w ciągu wielu lat testów.'
---

## Notatki:

- https://workflowy.com/ (mój [Second Brain](/second-brain/))
- https://keep.google.com/ (inbox do notatek na telefonie)
- https://www.notion.so/ (do współpracy z innymi)
- https://readwise.io/i/krzysztof49 (gromadzenie notatek + okazjonalnie [Reader](https://readwise.io/read))
- https://bear.app/ - szybkie notatki do zadań w pracy
- https://obsidian.md/ - notatki z książek na telefonie

## Książki:

- Najczęście papierowe z amazon.pl
- Kindle
- [Audible](https://audible.com)
- [Legimi](https://www.legimi.pl/kod/JSNUK/)

## System

- [AeroSpace](https://github.com/nikitabobko/AeroSpace) ([moja konfiguracja](https://github.com/kjendrzyca/dotfiles-mac))
- https://www.raycast.com/
- [Brave](https://brave.com/)
- [1Password](https://1password.com/)
- [Ice](https://github.com/jordanbaird/Ice) (gdy w menu barze brakuje miejsca)
- [Aldente](https://apphousekitchen.com/) (sailing mode 40-80%)
- https://eqmac.app/ ([AutoEq](https://autoeq.app/) dla słuchawek)
- https://obsproject.com/
- https://github.com/exelban/stats (monitorowanie RAM)
- https://karabiner-elements.pqrs.org/
- [NordVPN](https://refer-nordvpn.com/QKcGPyclsxy)

## Dev:

- [Superset](https://superset.sh/) - główny kokpit do pracy. Wspiera Git worktrees, pozwala pracować nad wieloma projektami jednocześnie, ma dobry UX i jest aktywnie rozwijany. Na chwilę obecną nie widzę lepszego narzędzia (wcześniej używałem [Conductora](https://conductor.build/))
- https://sw.kovidgoyal.net/kitty/ terminal
- https://ohmyz.sh/
- https://github.com/junegunn/fzf
- [Antigravity](https://antigravity.google/) - główny edytor
- https://code.visualstudio.com/
- https://cli.github.com/
- https://www.docker.com/
- https://github.com/BurntSushi/ripgrep
- https://github.com/sharkdp/fd
- https://github.com/sharkdp/bat
- https://dbeaver.io/
- https://www.loom.com/

## AI do kodowania

- [OpenCode](https://opencode.ai/) - interfejs, przez który korzystam z GPT-5.4-xhigh w ramach subskrypcji Codexa. Do niedawna wspierał też natywnie modele Anthropica i życie było piękne, ale Antrhopic postanowił [zablokować taką możliwość](https://x.com/thdxr/status/2034730036759339100). Istnieją community plugins, ale powodują banowanie kont. Wyjątkiem może być `opencode-with-claude`, który łączy się przez oficjalne Claude SDK. Testuję przy pomocy konta, które i tak zamierzam zamknąć, więc potencjalny ban mi dużo nie napsuje.
- Równolegle testuję też dostęp do modeli przez subskrybcję [GitHub Copilot](https://github.com/features/copilot), bo daje dostęp do modeli Anthropica i innych providerów. Potencjalnie może to posłużyć jako docelowy setup (jeden interfejs do wszystkich modeli), ale zobaczymy, czy nie będę zbyt szybko uderzał w limity (rozliczanie jest per request, a Opus liczony jest x3).
- [Claude Code](https://www.anthropic.com/claude-code) - natywny CLI do modeli Anthropica. Używam równolegle do OpenCode, bo nie da się inaczej. Wolałbym jedno wspólne narzędzie zamiast żonglować dwoma. Zwłaszcza, że DX Claude Code jest lata świetlne za OpenCode.

Wtyczki, których używam w OpenCode:

- [opencode-gemini-auth](https://www.npmjs.com/package/opencode-gemini-auth) - autoryzacja Gemini CLI do OpenCode. Plugin mam podpięty, ale na razie z modeli Gemini nie korzystam, bo w porównaniu do GPT i Anthropica okazały się ekstremalnie słabe.
- [@franlol/opencode-md-table-formatter](https://www.npmjs.com/package/@franlol/opencode-md-table-formatter) - formatowanie tabel markdown
- [@slkiser/opencode-quota](https://www.npmjs.com/package/@slkiser/opencode-quota) - limity użycia modeli w statusbarze TUI
- [opencode-with-claude](https://github.com/ianjwhite99/opencode-with-claude) - testowo, do korzystania z modeli Claude (Opus) w OpenCode przez lokalny proxy [Meridian](https://github.com/rynfar/meridian). Plugin sam startuje i zamyka proxy razem z OpenCode, każdej instancji OpenCode przydziela osobny port.

MCP:

- [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) - sterowanie przeglądarką z poziomu agenta (screenshoty, console, network, Lighthouse)
- [gh_grep](https://mcp.grep.app) - przeszukiwanie kodu publicznego na GitHubie przez [grep.app](https://grep.app). Mam wpięty i włączany case by case.


## Frameworki, Libki, Platformy:

- https://nextjs.org/
- https://www.netlify.com/ (Vercel w darmowym tierze nie może być wykorzystywany do budowy produktów komercyjnych)
- https://bunny.net?ref=8a7zkue452 - używam do streamingu moich szkoleń, najlepsza alternatywa jaką znalazłem do Vimeo czy Wistia
- https://www.mailerlite.com/invite/7ff80cb5801e5
- https://tally.cello.so/iMjlAVP6H1H - darmowe ankiety w stylistyce Notion
- [Hetzner](https://hetzner.cloud/?ref=rhn5AMNMfoTi) - najtańszy VPS, na nim stoją wszystkie moje projekty
- [Cloudflare](https://www.cloudflare.com/) - domeny i DNS (dla zwiększenia bezpieczeństwa)

## Sprzęt:

- MacBook Pro M1 Pro 16" 32gb RAM, 1TB
- Monitor LG UltraFine 27UN880P-B
- iPad Mini 6 + Pencil (do Kindla i podpisywania dokumentów)
- Aparat Sony ZV-E10 II + Sigma 16mm
- Aparat Canon M50 + 15-45mm + 22mm (backup)
- Mikrofon Shure SM7B
- Mikrofon Novox NC X USB
- Lampa Yongnuo YN-600 Air 5600k na statywie
- Mysz Logitech MX Master 3
- Google Pixel 8 Pro

Backup:

- t480s, 1080p, i5, 24GB, 1TB
- Klawiatura ThinkPad TrackPoint Keyboard II

## Biurko:

- [Biurko Ikea 160cm](https://www.ikea.com/pl/pl/p/trotten-biurko-z-regulacja-wysokosci-bezowy-bialy-s29434130/)
- [Stołek Ikea Trollberget](https://www.ikea.com/pl/pl/p/trollberget-stolek-do-siedzenia-stania-glose-czarny-80379347)

## Inne

- [Brain.fm](https://my.brain.fm/?promotionCode=promo_1KC6DhDxyvLufNfyZ264p2Za&name=Your%20First%20Month%20of%20Brain.fm%20Pro%20for%20$1&displayCost=1.00&description=You%27ve%20been%20referred!%20Get%201%20Month%20of%20Brain.fm%20Pro%20for%20$1&targetPlan=Monthly)
- [Wispr Flow](https://wisprflow.ai/r?KRZYSZTOF327) - dyktowanie
- [MacWhisper](https://goodsnooze.gumroad.com/l/macwhisper) - transkrypcja
- [Spotify](https://spotify.com/)
- [Signal](https://signal.org/)
- [Figma](https://figma.com/)
- [NoThinkDo](https://nothinkdo.app) - task manager (własna apka)
