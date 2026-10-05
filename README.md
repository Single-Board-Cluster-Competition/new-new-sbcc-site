# SBCC site (Hugo)

Requires Hugo 0.146 or newer (built and tested with 0.167).

    hugo server     # preview at http://localhost:1313
    hugo            # build into public/

Set `baseURL` in `hugo.toml` to the real address before deploying.

## Starting a new year

1. Copy last year's folder: `cp -r data/2026 data/2027`
2. Edit the copy:
   - `event.yaml` – dates, location, limits, register form, competition site
     (any date can be `TBD` until it's decided)
   - `benchmarks.yaml` – one dropdown per benchmark/application
   - `faq.yaml` – one dropdown per question
   - `sponsors.yaml` – logos go in `static/sponsors/`
3. Set `year = 2027` in `hugo.toml`.

The previous year automatically shows up under "Competitions by Year" on the
History page (any `data/<year>/event.yaml` with a `competition_site`).

FAQ answers and benchmark descriptions can use these placeholders, filled from
`event.yaml`, so each fact is written once:

    {year} {dates} {location} {signup_deadline} {proposal_deadline}
    {power_limit} {price_limit} {team_size}

A date set to `TBD` shows as "TBD". If only the end date is TBD, `{dates}`
reads like "April 8, 2027 – TBD".

## Committee

Each university on the organizing committee is one file in `data/committee/`.
It drives the About Us cards, the Contact Us list and the "Our team includes
members from …" sentence. Every field is optional; missing ones are skipped.

    weight: 10                      # order on the page, lowest first
    university_name: Aalborg University
    club_name: Aalborg Supercomputer Club
    club_link: https://aalborg.supercomputer.club/
    club_email: aalborgsupercomputerklub@gmail.com
    club_description: Markdown text…

Clubs that used to be on the committee go in `data/committee/prev-unis/`, same
format. They're listed under "Previous Committee Clubs" as links to `club_link`
(only the name, link and weight are used there). To retire a club, move its file
into that folder.

## Testimonials

Each testimonial on the home page is one file in `data/testimonials/`. Every
field is optional:

    name: Louise Møller Haase
    role: Vice Dean, Aalborg University
    image: assets/Haase.png   # path inside static/
    weight: 10                # lower numbers are shown first
    quote: >-
      Markdown text; **bold** words are highlighted.

One testimonial fills the row; several are laid out side by side.

## Other content

| What                                  | Where                        |
|---------------------------------------|------------------------------|
| Home intro, SBC blurb                 | `content/_index.md`          |
| Home page testimonials                | `data/testimonials/*.yaml`   |
| Competition page intro                | `content/competition.md`     |
| History write-ups                     | `content/history.md`         |
| About Us intro                        | `content/about-us.md`        |
| Committee universities and clubs      | `data/committee/*.yaml`      |
| Previous committee clubs              | `data/committee/prev-unis/*.yaml` |
| Nav links                             | `[[menus.main]]` in `hugo.toml` |
| Discord link, copyright line          | `[params]` in `hugo.toml`    |
| Images                                | `static/assets/`             |
