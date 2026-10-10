# Avenris: hits and absences in Australian official registers (as of 10 Oct 2026)

**Important method caveat (read first):** None of the official registers could be queried live from this research environment. Direct HTTP requests (curl) to abr.business.gov.au, search.ipaustralia.gov.au, trademarks.ipaustralia.gov.au, www.ndiscommission.gov.au were denied by the sandbox egress proxy (403 on CONNECT, organisation policy). The fetch tool could not resolve those hostnames (getaddrinfo ENOTFOUND), and the same happened for opencorporates.com and avenrissolutions.com. All findings below come from **web-search indexing** of register pages (search.ipaustralia.gov.au, abr.business.gov.au, ndiscommission.gov.au, trademarkelite.com). Where a search returned no hit, the result is **"not found in indexed web results"**, NOT a confirmed absence from the register. Indexed register pages are partial and may be months out of date. Before adopting or filing the name, someone should run a manual search on each official register (ABN Lookup, ASIC Connect, IP Australia ATMOSS/Trade Mark Search, NDIS Provider Register, My Aged Care "Find a provider").

Detail on the attempted access (no source URL possible; these are environment logs): curl to abr.business.gov.au/Search/ResultsActive?SearchText=avenris|avenriss|avenrys and /Search/ResultsAll?SearchText=avenris returned "CONNECT tunnel failed, response 403". WebFetch to abr.business.gov.au, search.ipaustralia.gov.au/trademarks/search/quick?q=avenris and opencorporates.com/companies/au?q=avenris returned "getaddrinfo ENOTFOUND".

## ASIC company register / ABN Lookup business names: "Avenris" and variants

### Takeaway
Web searches found no Australian company, ABN entity or business name containing "Avenris", "Avenriss" or "Avenrys", and nothing for "Avenris Care", "Avenris Care Support Services", "Avenris Technologies", "Avenris Healthcare", "Avenris Group" or "Avenris Pty Ltd". This could not be confirmed against live ABN Lookup or ASIC, so the status is **unverified absence**. The closest indexed ABR entities have different names.

### Cited Findings
- A broad web search for "Avenris" Australia returned no Australian entity. The two "Avenris" businesses that appeared don't show an Australian link in the results: **Avenris Solutions** (avenrissolutions.com, AI data annotation and automation services; country not shown) and **Avenris** (avenris.shop, consumer furniture such as overbed tables; country not shown) — [Avenris Solutions](https://www.avenrissolutions.com/); [avenris.shop](https://avenris.shop/). Note: these are brand or web uses and may matter for a common-law/passing-off or domain view. avenrissolutions.com could not be fetched to check its jurisdiction.
- A search for "Avenris ABN" surfaced no Avenris ABN. The nearest ABR record was **ABN 58 246 814 877, "AVERIS, KENNETH ARNOLD"**, sole trader, ABN active from 03 Feb 2000, GST registered (a personal name, not similar in sense) — [ABN Lookup 58246814877](https://abr.business.gov.au/ABN/View/58246814877)
- A site-restricted search of abr.business.gov.au, asic.gov.au, ipaustralia.gov.au and ndiscommission.gov.au for "Avenris" returned no pages from those domains — (search result; no register page returned)
- Near names among indexed ABR records (for "Avenir" Pty Ltd), none of them Avenris or Avenir: **Avenergy Pty Ltd**, ABN 26 149 488 282, active, NSW — [ABN Lookup](https://abr.business.gov.au/ABN/View/26149488282); **Avenue Builders Pty Ltd**, ABN 69 162 398 665, active, VIC — [ABN Lookup](https://abr.business.gov.au/ABN/View/69162398665); **Aventious Pty Ltd**, ABN 37 649 808 711, ACT — [CivicGraph](https://civicgraph.app/entities/AU-ABN-37649808711); **Avenue Bank Ltd**, ABN 24 628 073 085, public company — [CreditorWatch](https://creditorwatch.com.au/credit/profile/24628073085)
- No Australian entity named exactly "Avenir Pty Ltd" appeared in indexed results — (search summary; see ABN Lookup links above)
- Overseas near-names, for context only (not Australian): AVENYR GmbH (Munich, HRB 258632) — [Bloomberg LEI](https://lei.bloomberg.com/leis/view/529900SP27X4NMZ5QJ21); avenaris AG (Basel, Switzerland, insurance brokerage) — [Fundraiso](https://www.fundraiso.com/de/organisations/avenaris-ag); AVENIRA LIMITED (England, no. 16680521, incorporated 29 Aug 2025) — [Companies House](https://find-and-update.company-information.service.gov.uk/company/16680521)

### Inferences
- "Avenris" looks like a coined word with very low web footprint in Australia. Had an ABN entity or business name existed and been indexed, "Avenris ABN" would likely have surfaced it, since the ABR pages for near names (Averis, Avenergy) are indexed. That makes absence plausible but not proven: new registrations (especially from 2025–26) and business names are often not indexed.
- Under ASIC rules, a company name is refused only if it is "identical" to an existing name. Identical ignores things like "Pty Ltd", "Group", "Care", spacing and case only in limited ways. So even a near name like "Avenir" would not block "Avenris Pty Ltd" at ASIC. This is background knowledge, not checked against a source in this session.

### Gaps
- No live ABN Lookup (abr.business.gov.au) query for avenris / avenriss / avenrys / "avenris group" was possible (proxy 403 / DNS failure). Business names, including cancelled ones, are therefore unverified.
- No ASIC Connect (connectonline.asic.gov.au) query was possible. ASIC organisation and business-name registers are unverified, including recently registered or deregistered names.
- The jurisdiction and legal entity of Avenris Solutions (avenrissolutions.com) and avenris.shop are unknown.

## IP Australia trade marks: AVENRIS and confusingly similar marks

### Takeaway
No Australian trade mark for AVENRIS, AVENRIX, AVENERIS or AVENRA was found in indexed IP Australia or TrademarkElite pages. **Unverified**: the live Trade Mark Search was unreachable. The most relevant similar registered mark found is **AVENIR, No. 2450822 (Monotype GmbH), classes 9 and 42 (font software)**. This is technology-class overlap if an "Avenris Technologies" brand were pursued. No AVENIR mark in classes 44 or 45 was found in indexed results.

### Cited Findings
- **AVENIR, TM No. 2450822**: registered/protected; owner Monotype GmbH; classes 9 and 42 (type font software; temporary use of non-downloadable fonts); renewal due 27 Feb 2034 (so the filing or priority date is about 27 Feb 2024) — [IP Australia 2450822](https://search.ipaustralia.gov.au/trademarks/search/view/2450822/details)
- **L-AVENIR EST, TM No. 2517455**: word mark; status "Published: Under examination"; class 25 (clothing, footwear, headwear); owner not captured — [TrademarkElite 2517455](https://www.trademarkelite.com/australia/trademark/trademark-detail/2517455/L-AVENIR-EST)
- The same "AVENIR class 44/45" search returned other IP Australia records (2544122, 2517857, 2542141, 2542144, 2457666, 2605443, 2581085). The search summary describes them as similar-sounding marks in classes 44/45 (e.g. "The Speech Avenue", class 44), **none named AVENIR**. Their exact words, owners and status were not captured — [IP Australia 2544122](https://search.ipaustralia.gov.au/trademarks/search/view/2544122/details); [2457666](https://search.ipaustralia.gov.au/trademarks/search/view/2457666/details); [2605443](https://search.ipaustralia.gov.au/trademarks/search/view/2605443/details)
- A search for AVENRIS/AVENRIX/AVENERIS/AVENRA on TrademarkElite Australia found no such marks. The nearest-spelled marks returned were: **AVENCII, No. 2232776**, registered/protected, class 14 (jewellery, horological instruments) — [TrademarkElite 2232776](https://www.trademarkelite.com/australia/trademark/trademark-detail/2232776/AVENCII); **AVIIRI, No. 2002610**, protected, owner NOVARTIS AG, pharmaceutical preparations (class 5) — [TrademarkElite 2002610](https://www.trademarkelite.com/australia/trademark/trademark-detail/2002610/AVIIRI); **AVENGER, No. 220173**, registered — [TrademarkElite 220173](https://www.trademarkelite.com/australia/trademark/trademark-detail/220173/AVENGER); **AVENUE OF PALMS, No. 2625812**, accepted, in opposition period — [TrademarkElite 2625812](https://www.trademarkelite.com/australia/trademark/trademark-detail/2625812/AVENUE-OF-PALMS)
- US records (not Australian) for near words: AVENIAS — [Justia](https://trademark.justia.com/990/01/avenias-99001077.html); AVENIUM — [Justia](https://trademark.justia.com/872/48/avenium-87248485.html); AVENIRRE — [Justia](https://trademark.justia.com/902/57/avenirre-90257426.html)

### Inferences
- AVENIR (Monotype, classes 9/42) is the most relevant prior mark found. The visual and aural similarity between AVENRIS and AVENIR is moderate: they share AVEN- and -R-, and AVENRIS adds -IS. However, Monotype's specification is narrowly fonts, so conflict risk for class 44/45 care services looks low. For class 9/42 "Avenris Technologies", an examiner might cite it, but the goods differ (fonts vs. care-tech software). This is an inference only; a formal clearance search is advised.
- There are likely other AVENIR marks in Australia (e.g. Avenir as a common French word used in fashion, property and finance) that the limited indexed results did not show.

### Gaps
- No live ATMOSS / Australian Trade Mark Search for AVENRIS, or for similar-word searches (AVEN*, *VENRIS, AVENIR in classes 35, 36, 44, 45), was possible. Pending or very recent applications (2025–26) would not show in indexed pages.
- Owner, class and status details for the other indexed IP Australia records (2544122, 2517857, 2542141, 2542144, 2457666, 2605443, 2581085) were not captured.
- No search of the international (Madrid) designations covering Australia for AVENRIS was possible.

## NDIS Commission and Aged Care / My Aged Care provider listings

### Takeaway
No NDIS registered provider named Avenris (or Avenir) appeared in indexed NDIS Commission pages. Several "Aven-"/"Aver-" providers exist, notably **AVERA CARE PTY LTD**, which is a "care" name close in look to "Avenris Care". The My Aged Care and Aged Care Quality and Safety Commission listings were not searchable and are **unverified**.

### Cited Findings
- No NDIS Commission provider page for "Avenris" surfaced in searches for "Avenris" plus NDIS or site:ndiscommission.gov.au — (search results; no page returned)
- Near-name NDIS registered providers indexed on the NDIS Commission register:
  - **AVERA CARE PTY LTD**: NDIS provider registration page (details not captured) — [NDIS Commission](https://www.ndiscommission.gov.au/provider-registration/avera-care-pty-ltd)
  - **Avenues Australia Pty Ltd**: ABN 66 642 892 224, Perth; approved for plan management, support coordination and assist-life stage transition; outlets in VIC and WA — [NDIS Commission](https://www.ndiscommission.gov.au/provider-registration/avenues-australia-pty-ltd)
  - **Avenues Behaviour Support Services Pty Ltd**: Nundah QLD; approved for behaviour support and therapeutic supports — [NDIS Commission](https://www.ndiscommission.gov.au/provider-registration/avenues-behaviour-support-services-pty-ltd)
  - **Averee**: Warrandyte South VIC; approved for assistive equipment (mobility, hearing, vision) — [NDIS Commission](https://www.ndiscommission.gov.au/provider-registration/averee)
  - **Aventurine Services Pty Ltd**: Cardiff NSW; approved NDIS provider — [NDIS Commission](https://www.ndiscommission.gov.au/provider-registration/aventurine-services-pty-ltd)
  - **Avenu Specialist Disability Accommodation** — [NDIS Commission](https://www.ndiscommission.gov.au/provider-registration/avenu-specialist-disability-accommodation)
  - **Avenues Lifestyle Support Assoc Inc** — [NDIS Commission](https://www.ndiscommission.gov.au/provider-registration/avenues-lifestyle-support-assoc-inc)
- No Australian provider named "Avenir Care", "Avenir Health" or "Avenra" was found. The nearest health name was **Avive Health** (private mental-health hospitals) — [SEEK profile](https://www.seek.com.au/companies/avive-health-172420100287503)

### Inferences
- "Avera Care" and the "Avenues" family are the nearest existing names in the disability-care space. "Avenris Care" is distinguishable in spelling, but a careful brand check against Avera Care is worthwhile for consumer confusion in the same sector.

### Gaps
- No live NDIS Provider Register search was possible (ndiscommission.gov.au unreachable). Providers registered recently, or listed under a trading name different from the entity name, may be missed.
- No My Aged Care "Find a provider" or Aged Care Quality and Safety Commission (ACQSC) search was possible. No indexed results for "Avenris" in aged care were found, but this was not directly checked against those sites. Under the new Aged Care Act (in force from 1 Nov 2025, background knowledge), the provider register is held by ACQSC, which was also not checked.

## State-level registers worth noting

### Takeaway
No state-level register was checked directly. None returned "Avenris" hits in web searches.

### Cited Findings
- No sourced state-register findings were obtained.

### Inferences
- Registers to check manually (background knowledge, not verified this session): state incorporated-association registers (e.g. NSW Fair Trading, Consumer Affairs Victoria, QLD OFT), since care providers are often associations; state disability-worker or disability-service registers (e.g. Victoria's Disability Worker Commission); and .au domain availability (auDA, via a registrar WHOIS). An RDAP lookup of avenris.com.au was blocked by the sandbox (rdap.cctld.au 403).
- Business names have been national (ASIC) since 2012, so there are no separate state business-name registers to check.

### Gaps
- None of the state registers listed above, nor .au domain availability for avenris.com.au / avenriscare.com.au, could be verified.
