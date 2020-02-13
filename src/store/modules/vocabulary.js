import languages from '../../utils/lang'
import orgunits from '../../utils/orgunits'
import axios from 'axios'

const state = {
  vocabularies: {
    'pool': {
      terms: [
        { '@id': 'Bibliothek', 'skos:prefLabel': { 'eng': 'Bibliothek' } },
        { '@id': 'Institut für Romanistik', 'skos:prefLabel': { 'eng': 'Institut für Romanistik' } },
        { '@id': 'privat', 'skos:prefLabel': { 'eng': 'privat' } }
      ],
      loaded: true
    },
    'datepredicate': {
      terms: [
        { '@id': 'dcterms:date', 'skos:prefLabel': { 'eng': 'Date', 'deu': 'Datum' } },
        { '@id': 'dcterms:created', 'skos:prefLabel': { 'eng': 'Date created', 'deu': 'Date created' } },
        { '@id': 'dcterms:modified', 'skos:prefLabel': { 'eng': 'Date modified', 'deu': 'Date modified' } },
        { '@id': 'dcterms:available', 'skos:prefLabel': { 'eng': 'Date available', 'deu': 'Date available' } },
        { '@id': 'dcterms:issued', 'skos:prefLabel': { 'eng': 'Date issued', 'deu': 'Date issued' } },
        { '@id': 'dcterms:valid', 'skos:prefLabel': { 'eng': 'Date valid', 'deu': 'Date valid' } },
        { '@id': 'dcterms:dateAccepted', 'skos:prefLabel': { 'eng': 'Date accepted', 'deu': 'Date accepted' } },
        { '@id': 'dcterms:dateCopyrighted', 'skos:prefLabel': { 'eng': 'Date copyrighted', 'deu': 'Date copyrighted' } },
        { '@id': 'dcterms:dateSubmitted', 'skos:prefLabel': { 'eng': 'Date submitted', 'deu': 'Date submitted' } },
        { '@id': 'rdau:P60071', 'skos:prefLabel': { 'eng': 'Date of production', 'deu': 'Produktionsdatum' } },
        { '@id': 'phaidra:dateAccessioned', 'skos:prefLabel': { 'eng': 'Date accessioned', 'deu': 'Eingangsdatum' } },
        { '@id': 'dcterms:temporal', 'skos:prefLabel': { 'eng': 'Temporal coverage', 'deu': 'Zeitliche Abdeckung' } }
      ],
      loaded: true
    },
    'placepredicate': {
      terms: [
        { '@id': 'dcterms:spatial', 'skos:prefLabel': { 'eng': 'Depicted/Represented place' } },
        { '@id': 'vra:placeOfCreation', 'skos:prefLabel': { 'eng': 'Place of creation' } },
        { '@id': 'vra:placeOfSite', 'skos:prefLabel': { 'eng': 'Place of site' } }
      ],
      loaded: true
    },
    'objectidentifiertype': {
      terms: [
        { '@id': 'ids:doi', 'skos:prefLabel': { 'eng': 'DOI' }, 'skos:example': '10.1629/uksg.419' },
        { '@id': 'ids:hdl', 'skos:prefLabel': { 'eng': 'Handle' }, 'skos:example': '11353/10.761200' },
        { '@id': 'ids:urn', 'skos:prefLabel': { 'eng': 'URN' }, 'skos:example': 'urn:nbn:at:at-ubw-21405.98566.193074-2' },
        { '@id': 'ids:uri', 'skos:prefLabel': { 'eng': 'URI' }, 'skos:example': 'https://example.com/path/resource.txt' },
        { '@id': 'ids:isbn', 'skos:prefLabel': { 'eng': 'ISBN' }, 'skos:example': '978-3-16-148410-0' },
        { '@id': 'phaidra:acnumber', 'skos:prefLabel': { 'eng': 'AC number' }, 'skos:example': 'AC13399179' }
      ],
      loaded: true
    },
    'irobjectidentifiertype': {
      terms: [
        { '@id': 'ids:doi', 'skos:prefLabel': { 'eng': 'DOI' }, 'skos:example': '10.1629/uksg.419' },
        { '@id': 'ids:hdl', 'skos:prefLabel': { 'eng': 'Handle' }, 'skos:example': '11353/10.761200' },
        { '@id': 'ids:urn', 'skos:prefLabel': { 'eng': 'URN' }, 'skos:example': 'urn:nbn:at:at-ubw-21405.98566.193074-2' },
        { '@id': 'ids:isbn', 'skos:prefLabel': { 'eng': 'ISBN' }, 'skos:example': '978-3-16-148410-0' },
        { '@id': 'ids:uri', 'skos:prefLabel': { 'eng': 'URI/URL' }, 'skos:example': 'https://example.com/path/resource.txt' }
      ],
      loaded: true
    },
    'irobjectidentifiertypenoisbn': {
      terms: [
        { '@id': 'ids:doi', 'skos:prefLabel': { 'eng': 'DOI' }, 'skos:example': '10.1629/uksg.419' },
        { '@id': 'ids:hdl', 'skos:prefLabel': { 'eng': 'Handle' }, 'skos:example': '11353/10.761200' },
        { '@id': 'ids:urn', 'skos:prefLabel': { 'eng': 'URN' }, 'skos:example': 'urn:nbn:at:at-ubw-21405.98566.193074-2' },
        { '@id': 'ids:uri', 'skos:prefLabel': { 'eng': 'URI/URL' }, 'skos:example': 'https://example.com/path/resource.txt' }
      ],
      loaded: true
    },
    'entityidentifiertype': {
      terms: [
        { '@id': 'ids:orcid', 'skos:prefLabel': { 'eng': 'ORCID' }, 'skos:example': '0000-0002-1825-0097' },
        { '@id': 'ids:gnd', 'skos:prefLabel': { 'eng': 'GND' }, 'skos:example': '118635808' },
        { '@id': 'ids:viaf', 'skos:prefLabel': { 'eng': 'VIAF' }, 'skos:example': '89597697' },
        { '@id': 'ids:wikidata', 'skos:prefLabel': { 'eng': 'Wikidata ID' }, 'skos:example': 'Q129772' },
        { '@id': 'ids:lcnaf', 'skos:prefLabel': { 'eng': 'LCNAF' }, 'skos:example': 'n79021164' },
        { '@id': 'ids:isni', 'skos:prefLabel': { 'eng': 'ISNI' }, 'skos:example': '0000000121174585' }
      ],
      loaded: true
    },
    'citationpredicate': {
      terms: [
        { '@id': 'cito:cites', 'skos:prefLabel': { 'eng': 'Cites' } },
        { '@id': 'cito:isCitedBy', 'skos:prefLabel': { 'eng': 'Is cited by' } }
      ],
      loaded: true
    },
    'rolepredicate': {
      terms: [
        { '@id': 'role:abr', 'skos:prefLabel': { 'eng': 'Abridger', 'deu': 'Abridger', 'ita': 'Abridger' } },
        { '@id': 'role:act', 'skos:prefLabel': { 'eng': 'Actor', 'deu': 'SchauspielerIn', 'ita': 'Attore' } },
        { '@id': 'role:adp', 'skos:prefLabel': { 'eng': 'Adapter', 'deu': 'BearbeiterIn', 'ita': 'Adattatore' } },
        { '@id': 'role:rcp', 'skos:prefLabel': { 'eng': 'Addressee', 'deu': 'AdressatIn', 'ita': 'Destinatario' } },
        { '@id': 'role:advisor', 'skos:prefLabel': { 'eng': 'Adviser', 'deu': 'BetreuerIn', 'ita': 'Consigliere' } },
        { '@id': 'role:anl', 'skos:prefLabel': { 'eng': 'Analyst', 'deu': 'DateninterpretIn', 'ita': 'Analista' } },
        { '@id': 'role:anm', 'skos:prefLabel': { 'eng': 'Animator', 'deu': 'AnimatorIn', 'ita': 'Animator' } },
        { '@id': 'role:ann', 'skos:prefLabel': { 'eng': 'Annotator', 'deu': 'AutorIn von Anmerkungen', 'ita': 'Annotatore' } },
        { '@id': 'role:apl', 'skos:prefLabel': { 'eng': 'Appelant', 'deu': 'KlägerIn', 'ita': 'Appelant' } },
        { '@id': 'role:ape', 'skos:prefLabel': { 'eng': 'Appellee', 'deu': 'Beklagte', 'ita': 'Appellee' } },
        { '@id': 'role:app', 'skos:prefLabel': { 'eng': 'Applicant', 'deu': 'AntragstellerIn', 'ita': 'Applicant' } },
        { '@id': 'role:arc', 'skos:prefLabel': { 'eng': 'Architect', 'deu': 'ArchitektIn', 'ita': 'Architetto' } },
        { '@id': 'role:arr', 'skos:prefLabel': { 'eng': 'Arranger', 'deu': 'ArrangeurIn', 'ita': 'Arrangiatore' } },
        { '@id': 'role:acp', 'skos:prefLabel': { 'eng': 'Art copyist', 'deu': 'KunstkopistIn', 'ita': 'Art copyist' } },
        { '@id': 'role:adi', 'skos:prefLabel': { 'eng': 'Art director', 'deu': 'SzenenbildnerIn', 'ita': 'Art director' } },
        { '@id': 'role:art', 'skos:prefLabel': { 'eng': 'Artist', 'deu': 'KünstlerIn', 'ita': 'Artista' } },
        { '@id': 'role:ard', 'skos:prefLabel': { 'eng': 'Artistic director', 'deu': 'künstlerische/r LeiterIn', 'ita': 'Direttore artistico' } },
        { '@id': 'role:assessor', 'skos:prefLabel': { 'eng': 'Assessor', 'deu': 'BeurteilerIn', 'ita': 'Assessor' } },
        { '@id': 'role:asg', 'skos:prefLabel': { 'eng': 'Assignee', 'deu': 'RechtsnachfolgerIn', 'ita': 'Assignee' } },
        { '@id': 'role:asn', 'skos:prefLabel': { 'eng': 'Associated name', 'deu': 'Assoziierter Name', 'ita': 'Associated name' } },
        { '@id': 'role:att', 'skos:prefLabel': { 'eng': 'Attributed name', 'deu': 'zugeschriebene/r AutorIn', 'ita': 'Nome attribuito' } },
        { '@id': 'role:auc', 'skos:prefLabel': { 'eng': 'Auctioneer', 'deu': 'AuktionatorIn', 'ita': 'Auctioneer' } },
        { '@id': 'role:aut', 'skos:prefLabel': { 'eng': 'Author', 'deu': 'Autor', 'ita': 'Author' } },
        { '@id': 'role:aqt', 'skos:prefLabel': { 'eng': 'Author in quotations or text abstracts', 'deu': 'AutorIn in Zitaten oder Zusammenfassungen', 'ita': 'Author in quotations or text abstracts' } },
        { '@id': 'role:aft', 'skos:prefLabel': { 'eng': 'Author of afterword, colophon, etc.', 'deu': 'AutorIn des Nachworts, Kolophon…', 'ita': 'Author of afterword, colophon, etc.' } },
        { '@id': 'role:aud', 'skos:prefLabel': { 'eng': 'Author of dialog', 'deu': 'KommentatorIn', 'ita': 'Autore del dialogo' } },
        { '@id': 'role:aui', 'skos:prefLabel': { 'eng': 'Author of introduction', 'deu': 'AutorIn der Einleitung', 'ita': 'Autore dell\'introduzione' } },
        { '@id': 'role:authorofsubtitles', 'skos:prefLabel': { 'eng': 'Author of subtitles', 'deu': 'AutorIn der Untertitel', 'ita': 'Autore dei sottotitoli' } },
        { '@id': 'role:ato', 'skos:prefLabel': { 'eng': 'Autographer', 'deu': 'Unterzeichnende/r', 'ita': 'Autographer' } },
        { '@id': 'role:ant', 'skos:prefLabel': { 'eng': 'Bibliographic antecedent', 'deu': 'ForscherIn', 'ita': 'Antecedente bibliografico' } },
        { '@id': 'role:bnd', 'skos:prefLabel': { 'eng': 'Binder', 'deu': 'BuchbinderIn', 'ita': 'Legatore' } },
        { '@id': 'role:bdd', 'skos:prefLabel': { 'eng': 'Binding designer', 'deu': 'Binde-DesignerIn', 'ita': 'Binding designer' } },
        { '@id': 'role:blw', 'skos:prefLabel': { 'eng': 'Blurb writer (missing space)', 'deu': 'AutorIn des Klappentextes', 'ita': 'Blurbwriter' } },
        { '@id': 'role:bkd', 'skos:prefLabel': { 'eng': 'Book designer', 'deu': 'DesignerIn des analogen Buches', 'ita': 'Designer del libro' } },
        { '@id': 'role:bkp', 'skos:prefLabel': { 'eng': 'Book producer', 'deu': 'BuchproduzentIn', 'ita': 'Book producer' } },
        { '@id': 'role:bjd', 'skos:prefLabel': { 'eng': 'Bookjacket designer', 'deu': 'DesignerIn des Buchumschlages / Schutzumschlages', 'ita': 'Bookjacket designer' } },
        { '@id': 'role:bpd', 'skos:prefLabel': { 'eng': 'Bookplate designer', 'deu': 'DesignerIn des Exlibris', 'ita': 'Creatore dell\'ex-libris' } },
        { '@id': 'role:bsl', 'skos:prefLabel': { 'eng': 'Bookseller', 'deu': 'BuchhändlerIn', 'ita': 'Bookseller' } },
        { '@id': 'role:brl', 'skos:prefLabel': { 'eng': 'Braille embosser', 'deu': 'BrailledruckerIn', 'ita': 'Braille embosser' } },
        { '@id': 'role:brd', 'skos:prefLabel': { 'eng': 'Broadcaster', 'deu': 'RundfunksprecherIn', 'ita': 'Broadcaster' } },
        { '@id': 'role:cll', 'skos:prefLabel': { 'eng': 'Calligrapher', 'deu': 'KalligraphIn', 'ita': 'Calligrapher' } },
        { '@id': 'role:ctg', 'skos:prefLabel': { 'eng': 'Cartographer', 'deu': 'KartografIn', 'ita': 'Cartografo' } },
        { '@id': 'role:cas', 'skos:prefLabel': { 'eng': 'Caster', 'deu': 'GießerIn', 'ita': 'Caster' } },
        { '@id': 'role:cns', 'skos:prefLabel': { 'eng': 'Censor', 'deu': 'ZensorIn', 'ita': 'Censor' } },
        { '@id': 'role:chr', 'skos:prefLabel': { 'eng': 'Choreographer', 'deu': 'ChoreographIn', 'ita': 'Coreografo' } },
        { '@id': 'role:cng', 'skos:prefLabel': { 'eng': 'Cinematographer', 'deu': 'Kameramann/frau', 'ita': 'Direttore della fotografia' } },
        { '@id': 'role:cli', 'skos:prefLabel': { 'eng': 'Client', 'deu': 'Client', 'ita': 'Client' } },
        { '@id': 'role:coadvisor', 'skos:prefLabel': { 'eng': 'Co-Advisor', 'deu': 'MitbetreuerIn', 'ita': 'Co-Advisor' } },
        { '@id': 'role:cor', 'skos:prefLabel': { 'eng': 'Collection registrar', 'deu': 'RegistratorIn', 'ita': 'Collection registrar' } },
        { '@id': 'role:col', 'skos:prefLabel': { 'eng': 'Collector', 'deu': 'SammlerIn', 'ita': 'Collezionista' } },
        { '@id': 'role:clt', 'skos:prefLabel': { 'eng': 'Collotyper', 'deu': 'LichtdruckerIn', 'ita': 'Collotyper' } },
        { '@id': 'role:clr', 'skos:prefLabel': { 'eng': 'Colorist', 'deu': 'KoloristIn', 'ita': 'Colorist' } },
        { '@id': 'role:cmm', 'skos:prefLabel': { 'eng': 'Commentator', 'deu': 'KommentatorIn / BerichterstatterIn', 'ita': 'Commentator' } },
        { '@id': 'role:cwt', 'skos:prefLabel': { 'eng': 'Commentator for written text', 'deu': 'Autorin des Kommentars', 'ita': 'Commentator for written text' } },
        { '@id': 'role:com', 'skos:prefLabel': { 'eng': 'Compiler', 'deu': 'HerausgeberIn einer Sammlung', 'ita': 'Compilatore' } },
        { '@id': 'role:cpl', 'skos:prefLabel': { 'eng': 'Complainant', 'deu': 'Complainant', 'ita': 'Complainant' } },
        { '@id': 'role:cpt', 'skos:prefLabel': { 'eng': 'Complainant-appellant', 'deu': 'Complainant-appellant', 'ita': 'Complainant-appellant' } },
        { '@id': 'role:cpe', 'skos:prefLabel': { 'eng': 'Complainant-appellee', 'deu': 'Complainant-appellee', 'ita': 'Complainant-appellee' } },
        { '@id': 'role:cmp', 'skos:prefLabel': { 'eng': 'Composer', 'deu': 'KomponistIn', 'ita': 'Compositore' } },
        { '@id': 'role:cmt', 'skos:prefLabel': { 'eng': 'Compositor', 'deu': 'SchriftsetzerIn', 'ita': 'Compositor' } },
        { '@id': 'role:ccp', 'skos:prefLabel': { 'eng': 'Conceptor', 'deu': 'KonzepterIn / KonzeptionstexterIn', 'ita': 'Conceptor' } },
        { '@id': 'role:cnd', 'skos:prefLabel': { 'eng': 'Conductor', 'deu': 'KapellmeisterIn', 'ita': 'Direttore d’orchestra' } },
        { '@id': 'role:con', 'skos:prefLabel': { 'eng': 'Conservator', 'deu': 'KonservatorIn', 'ita': 'Conservator' } },
        { '@id': 'role:csl', 'skos:prefLabel': { 'eng': 'Consultant', 'deu': 'Fachliche Beratung / FachberaterIn', 'ita': 'Consultant' } },
        { '@id': 'role:csp', 'skos:prefLabel': { 'eng': 'Consultant to a project', 'deu': 'ProjektberaterIn', 'ita': 'Consultant to a project' } },
        { '@id': 'role:cos', 'skos:prefLabel': { 'eng': 'Contestant', 'deu': 'Contestant', 'ita': 'Contestant' } },
        { '@id': 'role:cot', 'skos:prefLabel': { 'eng': 'Contestant-appellant', 'deu': 'Contestant-appellant', 'ita': 'Contestant-appellant' } },
        { '@id': 'role:coe', 'skos:prefLabel': { 'eng': 'Contestant-appellee', 'deu': 'Contestant-appellee', 'ita': 'Contestant-appellee' } },
        { '@id': 'role:cts', 'skos:prefLabel': { 'eng': 'Contestee', 'deu': 'Contestee', 'ita': 'Contestee' } },
        { '@id': 'role:ctt', 'skos:prefLabel': { 'eng': 'Contestee-appellant', 'deu': 'Contestee-appellant', 'ita': 'Contestee-appellant' } },
        { '@id': 'role:cte', 'skos:prefLabel': { 'eng': 'Contestee-appellee', 'deu': 'Contestee-appellee', 'ita': 'Contestee-appellee' } },
        { '@id': 'role:ctr', 'skos:prefLabel': { 'eng': 'Contractor', 'deu': 'AuftragnehmerIn', 'ita': 'Contractor' } },
        { '@id': 'role:ctb', 'skos:prefLabel': { 'eng': 'Contributor', 'deu': 'Beitragende/r', 'ita': 'Contributor' } },
        { '@id': 'role:copista', 'skos:prefLabel': { 'eng': 'Copista', 'deu': 'Copista', 'ita': 'Copista' } },
        { '@id': 'role:cpc', 'skos:prefLabel': { 'eng': 'Copyright claimant', 'deu': 'AntragestellerIn auf Copyright', 'ita': 'Copyright claimant' } },
        { '@id': 'role:cph', 'skos:prefLabel': { 'eng': 'Copyright holder', 'deu': 'InhaberIn des Copyright', 'ita': 'Copyright holder' } },
        { '@id': 'role:crr', 'skos:prefLabel': { 'eng': 'Corrector', 'deu': 'KorrektorIn', 'ita': 'Corrector' } },
        { '@id': 'role:crp', 'skos:prefLabel': { 'eng': 'Correspondent', 'deu': 'KorrespondentIn', 'ita': 'Correspondent' } },
        { '@id': 'role:cst', 'skos:prefLabel': { 'eng': 'Costume designer', 'deu': 'KostümbildnerIn', 'ita': 'Costume designer' } },
        { '@id': 'role:cou', 'skos:prefLabel': { 'eng': 'Court governed', 'deu': 'Court governed', 'ita': 'Court governed' } },
        { '@id': 'role:crt', 'skos:prefLabel': { 'eng': 'Court reporter', 'deu': 'GerichtsberichterstatterIn', 'ita': 'Court reporter' } },
        { '@id': 'role:cov', 'skos:prefLabel': { 'eng': 'Cover designer', 'deu': 'DesignerIn der Hüller / Verpackung', 'ita': 'Cover designer' } },
        { '@id': 'role:cur', 'skos:prefLabel': { 'eng': 'Curator', 'deu': 'KuratorIn', 'ita': 'Curator' } },
        { '@id': 'role:dnc', 'skos:prefLabel': { 'eng': 'Dancer', 'deu': 'TänzerIn', 'ita': 'Dancer' } },
        { '@id': 'role:dtc', 'skos:prefLabel': { 'eng': 'Data contributor', 'deu': 'DatenlieferantIn', 'ita': 'Data contributor' } },
        { '@id': 'role:dtm', 'skos:prefLabel': { 'eng': 'Data manager', 'deu': 'DatenmanagerIn', 'ita': 'Gestore di dati' } },
        { '@id': 'role:datasupplier', 'skos:prefLabel': { 'eng': 'Data Supplier', 'deu': 'DatenlieferantIn', 'ita': 'Fornitore dei dati' } },
        { '@id': 'role:dte', 'skos:prefLabel': { 'eng': 'Dedicatee', 'deu': 'WidmungsträgerIn', 'ita': 'Dedicatario' } },
        { '@id': 'role:dto', 'skos:prefLabel': { 'eng': 'Dedicator', 'deu': 'Widmende/r', 'ita': 'Dedicante' } },
        { '@id': 'role:dfd', 'skos:prefLabel': { 'eng': 'Defendant', 'deu': 'Defendant', 'ita': 'Defendant' } },
        { '@id': 'role:dft', 'skos:prefLabel': { 'eng': 'Defendant-appellant', 'deu': 'Defendant-appellant', 'ita': 'Defendant-appellant' } },
        { '@id': 'role:dfe', 'skos:prefLabel': { 'eng': 'Defendant-appellee', 'deu': 'Defendant-appellee', 'ita': 'Defendant-appellee' } },
        { '@id': 'role:dgg', 'skos:prefLabel': { 'eng': 'Degree granting institution', 'deu': 'Verleihende Institution', 'ita': 'Istituzione che rilascia il titolo accademico' } },
        { '@id': 'role:dgs', 'skos:prefLabel': { 'eng': 'Degree supervisor', 'deu': 'Doktorvater / BetreuerIn einer Akademischen Abschlußarbeit', 'ita': 'Degree supervisor' } },
        { '@id': 'role:dln', 'skos:prefLabel': { 'eng': 'Delineator', 'deu': 'ZeichnerIn', 'ita': 'Delineator' } },
        { '@id': 'role:dpc', 'skos:prefLabel': { 'eng': 'Depicted', 'deu': 'abgebildet / Beschrieben', 'ita': 'Depicted' } },
        { '@id': 'role:dpt', 'skos:prefLabel': { 'eng': 'Depositor', 'deu': 'Depositor', 'ita': 'Depositor' } },
        { '@id': 'role:dsr', 'skos:prefLabel': { 'eng': 'Designer', 'deu': 'DesignerIn', 'ita': 'Designer' } },
        { '@id': 'role:digitiser', 'skos:prefLabel': { 'eng': 'Digitiser', 'deu': 'DigitalisiererIn', 'ita': 'Autore della digitalizzazione' } },
        { '@id': 'role:drt', 'skos:prefLabel': { 'eng': 'Director', 'deu': 'RegisseurIn', 'ita': 'Director' } },
        { '@id': 'role:dis', 'skos:prefLabel': { 'eng': 'Dissertant', 'deu': 'DissertantIn', 'ita': 'Tesista' } },
        { '@id': 'role:dbp', 'skos:prefLabel': { 'eng': 'Distribution place', 'deu': 'Vertriebsort', 'ita': 'Distribution place' } },
        { '@id': 'role:dst', 'skos:prefLabel': { 'eng': 'Distributor', 'deu': 'RechteinhaberIn', 'ita': 'Distributore' } },
        { '@id': 'role:domainexpert', 'skos:prefLabel': { 'eng': 'Domain Expert', 'deu': 'FachexpertIn', 'ita': 'Esperto del settore' } },
        { '@id': 'role:dnr', 'skos:prefLabel': { 'eng': 'Donor', 'deu': 'StifterIn', 'ita': 'Donatore' } },
        { '@id': 'role:drm', 'skos:prefLabel': { 'eng': 'Draftsman', 'deu': 'BauzeichnerIn / KonstruktionszeichnerIn / technische/r ZeichnerIn', 'ita': 'Draftsman' } },
        { '@id': 'role:dub', 'skos:prefLabel': { 'eng': 'Dubious author', 'deu': 'zweifelhafte AutorIn', 'ita': 'Autore incerto' } },
        { '@id': 'role:edt', 'skos:prefLabel': { 'eng': 'Editor', 'deu': 'EditorIn', 'ita': 'Curatore' } },
        { '@id': 'role:edc', 'skos:prefLabel': { 'eng': 'Editor of compilation', 'deu': 'EditorIn der Zusammenstellung / des Sammelwerks', 'ita': 'Editor of compilation' } },
        { '@id': 'role:edm', 'skos:prefLabel': { 'eng': 'Editor of moving image work', 'deu': 'Film-EditorIn', 'ita': 'Editor of moving image work' } },
        { '@id': 'role:elg', 'skos:prefLabel': { 'eng': 'Electrician', 'deu': 'ElektrikerIn', 'ita': 'Electrician' } },
        { '@id': 'role:elt', 'skos:prefLabel': { 'eng': 'Electrotyper', 'deu': 'Electrotyper', 'ita': 'Electrotyper' } },
        { '@id': 'role:enj', 'skos:prefLabel': { 'eng': 'Enacting jurisdiction', 'deu': 'Verfügende / verordnende Jurisdiktion', 'ita': 'Enacting jurisdiction' } },
        { '@id': 'role:eng', 'skos:prefLabel': { 'eng': 'Engineer', 'deu': 'IngenieurIn', 'ita': 'Ingegnere' } },
        { '@id': 'role:egr', 'skos:prefLabel': { 'eng': 'Engraver', 'deu': 'GraveurIn', 'ita': 'Incisore' } },
        { '@id': 'role:etr', 'skos:prefLabel': { 'eng': 'Etcher', 'deu': 'RadiererIn', 'ita': 'Acquafortista' } },
        { '@id': 'role:evaluator', 'skos:prefLabel': { 'eng': 'Evaluator', 'deu': 'EvaluatorIn', 'ita': 'Valutatore' } },
        { '@id': 'role:exp', 'skos:prefLabel': { 'eng': 'Expert', 'deu': 'ExpertIn / Sachverständige/r', 'ita': 'Expert' } },
        { '@id': 'role:fac', 'skos:prefLabel': { 'eng': 'Facsimilist', 'deu': 'BearbeiterIn des Faksimile', 'ita': 'Responsabile del facsimile' } },
        { '@id': 'role:fld', 'skos:prefLabel': { 'eng': 'Field director', 'deu': 'LeiterIn von Feldforschung', 'ita': 'Field director' } },
        { '@id': 'role:fmd', 'skos:prefLabel': { 'eng': 'Film director', 'deu': 'FilmregisseurIn', 'ita': 'Film director' } },
        { '@id': 'role:fds', 'skos:prefLabel': { 'eng': 'Film distributor', 'deu': 'Filmverleih', 'ita': 'Film distributor' } },
        { '@id': 'role:flm', 'skos:prefLabel': { 'eng': 'Film editor', 'deu': 'Film-EditorIn', 'ita': 'Responsabile del montaggio' } },
        { '@id': 'role:fmp', 'skos:prefLabel': { 'eng': 'Film producer', 'deu': 'FilmproduzentIn', 'ita': 'Film producer' } },
        { '@id': 'role:fmk', 'skos:prefLabel': { 'eng': 'Filmmaker', 'deu': 'FilmemacherIn', 'ita': 'Filmmaker' } },
        { '@id': 'role:fpy', 'skos:prefLabel': { 'eng': 'First party', 'deu': 'erste Vertragspartei', 'ita': 'First party' } },
        { '@id': 'role:frg', 'skos:prefLabel': { 'eng': 'Forger', 'deu': 'KopistIn / FälscherIn', 'ita': 'Forger' } },
        { '@id': 'role:fmo', 'skos:prefLabel': { 'eng': 'Former owner', 'deu': 'VorbesitzerIn', 'ita': 'Precedente proprietario' } },
        { '@id': 'role:founder', 'skos:prefLabel': { 'eng': 'Founder', 'deu': 'GründerIn', 'ita': 'Founder' } },
        { '@id': 'role:fnd', 'skos:prefLabel': { 'eng': 'Funder', 'deu': 'Funder', 'ita': 'Funder' } },
        { '@id': 'role:gis', 'skos:prefLabel': { 'eng': 'Geographic information specialist', 'deu': 'Geographic information specialist', 'ita': 'Field director' } },
        { '@id': 'role:graphicdesigner', 'skos:prefLabel': { 'eng': 'Graphic Designer', 'deu': 'GrafikdesignerIn', 'ita': 'Grafico' } },
        { '@id': 'role:hnr', 'skos:prefLabel': { 'eng': 'Honoree', 'deu': 'Geehrte/r', 'ita': 'Onorato' } },
        { '@id': 'role:hst', 'skos:prefLabel': { 'eng': 'Host', 'deu': 'GastgeberIn', 'ita': 'Host' } },
        { '@id': 'role:his', 'skos:prefLabel': { 'eng': 'Host institution', 'deu': 'Gastgebende Institution', 'ita': 'Host institution' } },
        { '@id': 'role:ilu', 'skos:prefLabel': { 'eng': 'Illuminator', 'deu': 'IlluminatorIn', 'ita': 'Miniatore' } },
        { '@id': 'role:ill', 'skos:prefLabel': { 'eng': 'Illustrator', 'deu': 'IllustratorIn', 'ita': 'Illustratore' } },
        { '@id': 'role:initiator', 'skos:prefLabel': { 'eng': 'Initiator', 'deu': 'InitiatorIn', 'ita': 'Iniziatore' } },
        { '@id': 'role:ins', 'skos:prefLabel': { 'eng': 'Inscriber', 'deu': 'Widmende/r', 'ita': 'Inscriber' } },
        { '@id': 'role:itr', 'skos:prefLabel': { 'eng': 'Instrumentalist', 'deu': 'InstrumentalistIn', 'ita': 'Instrumentalist' } },
        { '@id': 'role:interpreter', 'skos:prefLabel': { 'eng': 'Interpreter', 'deu': 'InterpretIn', 'ita': 'Interprete' } },
        { '@id': 'role:ive', 'skos:prefLabel': { 'eng': 'Interviewee', 'deu': 'InterviewpartnerIn', 'ita': 'Intervistato' } },
        { '@id': 'role:ivr', 'skos:prefLabel': { 'eng': 'Interviewer', 'deu': 'InterviewerIn', 'ita': 'Intervistatore' } },
        { '@id': 'role:inv', 'skos:prefLabel': { 'eng': 'Inventor', 'deu': 'ErfinderIn', 'ita': 'Inventor' } },
        { '@id': 'role:isb', 'skos:prefLabel': { 'eng': 'Issuing body', 'deu': 'Issuing body', 'ita': 'Issuing body' } },
        { '@id': 'role:jud', 'skos:prefLabel': { 'eng': 'Judge', 'deu': 'Judge', 'ita': 'Judge' } },
        { '@id': 'role:jug', 'skos:prefLabel': { 'eng': 'Jurisdiction governed', 'deu': 'Jurisdiction governed', 'ita': 'Jurisdiction governed' } },
        { '@id': 'role:keeperoftheoriginal', 'skos:prefLabel': { 'eng': 'Keeper of the original', 'deu': 'AufbewahrerIn des Originals', 'ita': 'Affidatario dell\'originale' } },
        { '@id': 'role:lbr', 'skos:prefLabel': { 'eng': 'Laboratory', 'deu': 'Labor', 'ita': 'Laboratory' } },
        { '@id': 'role:ldr', 'skos:prefLabel': { 'eng': 'Laboratory director', 'deu': 'LaborleiterIn', 'ita': 'Laboratory director' } },
        { '@id': 'role:lsa', 'skos:prefLabel': { 'eng': 'Landscape architect', 'deu': 'LandschaftsarchitektIn', 'ita': 'Landscape architect' } },
        { '@id': 'role:led', 'skos:prefLabel': { 'eng': 'Lead', 'deu': 'Leit- / LeiterIn-', 'ita': 'Lead' } },
        { '@id': 'role:len', 'skos:prefLabel': { 'eng': 'Lender', 'deu': 'Leihgeber', 'ita': 'Lender' } },
        { '@id': 'role:lil', 'skos:prefLabel': { 'eng': 'Libelant', 'deu': 'Libelant', 'ita': 'Libelant' } },
        { '@id': 'role:lit', 'skos:prefLabel': { 'eng': 'Libelant-appellant', 'deu': 'Libelant-appellant', 'ita': 'Libelant-appellant' } },
        { '@id': 'role:lie', 'skos:prefLabel': { 'eng': 'Libelant-appellee', 'deu': 'Libelant-appellee', 'ita': 'Libelant-appellee' } },
        { '@id': 'role:lel', 'skos:prefLabel': { 'eng': 'Libelee', 'deu': 'Libelee', 'ita': 'Libelee' } },
        { '@id': 'role:let', 'skos:prefLabel': { 'eng': 'Libelee-appellant', 'deu': 'Libelee-appellant', 'ita': 'Libelee-appellant' } },
        { '@id': 'role:lee', 'skos:prefLabel': { 'eng': 'Libelee-appellee', 'deu': 'Libelee-appellee', 'ita': 'Libelee-appellee' } },
        { '@id': 'role:lbt', 'skos:prefLabel': { 'eng': 'Librettist', 'deu': 'LibrettistIn', 'ita': 'Librettista' } },
        { '@id': 'role:lse', 'skos:prefLabel': { 'eng': 'Licensee', 'deu': 'LizenznehmerIn / LizenzinhaberIn', 'ita': 'Licensee' } },
        { '@id': 'role:lso', 'skos:prefLabel': { 'eng': 'Licensor', 'deu': 'LizenzgeberIn', 'ita': 'Licensor' } },
        { '@id': 'role:lgd', 'skos:prefLabel': { 'eng': 'Lighting designer', 'deu': 'LichtgestalterIn', 'ita': 'Lighting designer' } },
        { '@id': 'role:ltg', 'skos:prefLabel': { 'eng': 'Lithographer', 'deu': 'LithographIn', 'ita': 'Litografo' } },
        { '@id': 'role:lyr', 'skos:prefLabel': { 'eng': 'Lyricist', 'deu': 'SongwriterIn', 'ita': 'Paroliere' } },
        { '@id': 'role:mfp', 'skos:prefLabel': { 'eng': 'Manufacture place', 'deu': 'Herstellungsort', 'ita': 'Manufacture place' } },
        { '@id': 'role:mfr', 'skos:prefLabel': { 'eng': 'Manufacturer', 'deu': 'HerstellerIn', 'ita': 'Manufacturer' } },
        { '@id': 'role:mrb', 'skos:prefLabel': { 'eng': 'Marbler', 'deu': 'MarmorierIn', 'ita': 'Marbler' } },
        { '@id': 'role:mrk', 'skos:prefLabel': { 'eng': 'Markup editor', 'deu': 'Markup editor', 'ita': 'Markup editor' } },
        { '@id': 'role:med', 'skos:prefLabel': { 'eng': 'Medium', 'deu': 'Medium', 'ita': 'Medium' } },
        { '@id': 'role:mdc', 'skos:prefLabel': { 'eng': 'Metadata contact', 'deu': 'Metadata contact', 'ita': 'Metadata contact' } },
        { '@id': 'role:emt', 'skos:prefLabel': { 'eng': 'Metal-engraver', 'deu': 'MetallstecherIn', 'ita': 'Calcografo' } },
        { '@id': 'role:mtk', 'skos:prefLabel': { 'eng': 'Minute taker', 'deu': 'ProtokollführerIn', 'ita': 'Minute taker' } },
        { '@id': 'role:mod', 'skos:prefLabel': { 'eng': 'Moderator', 'deu': 'ModeratorIn / DiskussionsleiterIn', 'ita': 'Moderator' } },
        { '@id': 'role:mon', 'skos:prefLabel': { 'eng': 'Monitor', 'deu': 'Monitor', 'ita': 'Monitor' } },
        { '@id': 'role:mcp', 'skos:prefLabel': { 'eng': 'Music copyist', 'deu': 'MusikkopistIn / KopistIn', 'ita': 'Music copyist' } },
        { '@id': 'role:msd', 'skos:prefLabel': { 'eng': 'Musical director', 'deu': 'musikalische/r LeiterIn', 'ita': 'Direttore musicale' } },
        { '@id': 'role:mus', 'skos:prefLabel': { 'eng': 'Musician', 'deu': 'MusikerIn', 'ita': 'Musicista' } },
        { '@id': 'role:nrt', 'skos:prefLabel': { 'eng': 'Narrator', 'deu': 'ErzählerIn', 'ita': 'Narrator' } },
        { '@id': 'role:osp', 'skos:prefLabel': { 'eng': 'Onscreen presenter', 'deu': 'Fernseh- / TV-ModeratorIn', 'ita': 'Onscreen presenter' } },
        { '@id': 'role:opn', 'skos:prefLabel': { 'eng': 'Opponent', 'deu': 'WidersacherIn', 'ita': 'Controrelatore' } },
        { '@id': 'role:orm', 'skos:prefLabel': { 'eng': 'Organizer', 'deu': 'VeranstalterIn', 'ita': 'Organizer' } },
        { '@id': 'role:org', 'skos:prefLabel': { 'eng': 'Originator', 'deu': 'ErzeugerIn', 'ita': 'Originator' } },
        { '@id': 'role:oth', 'skos:prefLabel': { 'eng': 'Other', 'deu': 'Andere', 'ita': 'Altro' } },
        { '@id': 'role:own', 'skos:prefLabel': { 'eng': 'Owner', 'deu': 'EigentümerIn', 'ita': 'Proprietario' } },
        { '@id': 'role:pan', 'skos:prefLabel': { 'eng': 'Panelist', 'deu': 'DiskussionsteilnehmerIn', 'ita': 'Panelist' } },
        { '@id': 'role:ppm', 'skos:prefLabel': { 'eng': 'Papermaker', 'deu': 'PapiermacherIn / PapierherstellerIn', 'ita': 'Papermaker' } },
        { '@id': 'role:pta', 'skos:prefLabel': { 'eng': 'Patent applicant', 'deu': 'PatentanmelderIn', 'ita': 'Patent applicant' } },
        { '@id': 'role:pth', 'skos:prefLabel': { 'eng': 'Patent holder', 'deu': 'PatentinhaberIn', 'ita': 'Patent holder' } },
        { '@id': 'role:pat', 'skos:prefLabel': { 'eng': 'Patron', 'deu': 'SchirmherrIn / FördererIn', 'ita': 'Patron' } },
        { '@id': 'role:pedagogicexpert', 'skos:prefLabel': { 'eng': 'Pedagogic Expert', 'deu': 'Pädagogische/r ExpertIn', 'ita': 'Esperto pedagogico' } },
        { '@id': 'role:prf', 'skos:prefLabel': { 'eng': 'Performer', 'deu': 'Performer', 'ita': 'Performer' } },
        { '@id': 'role:pma', 'skos:prefLabel': { 'eng': 'Permitting agency', 'deu': 'Genehmigungsbehörde', 'ita': 'Permitting agency' } },
        { '@id': 'role:pht', 'skos:prefLabel': { 'eng': 'Photographer', 'deu': 'FotografIn', 'ita': 'Fotografo' } },
        { '@id': 'role:ptf', 'skos:prefLabel': { 'eng': 'Plaintiff', 'deu': 'KlägerIn', 'ita': 'Plaintiff' } },
        { '@id': 'role:ptt', 'skos:prefLabel': { 'eng': 'Plaintiff-appellant', 'deu': 'Plaintiff-appellant', 'ita': 'Plaintiff-appellant' } },
        { '@id': 'role:pte', 'skos:prefLabel': { 'eng': 'Plaintiff-appellee', 'deu': 'Plaintiff-appellee', 'ita': 'Plaintiff-appellee' } },
        { '@id': 'role:plt', 'skos:prefLabel': { 'eng': 'Platemaker', 'deu': 'Platemaker', 'ita': 'Platemaker' } },
        { '@id': 'role:pra', 'skos:prefLabel': { 'eng': 'Praeses', 'deu': 'Präses', 'ita': 'Praeses' } },
        { '@id': 'role:pre', 'skos:prefLabel': { 'eng': 'Presenter', 'deu': 'Presenter', 'ita': 'Presenter' } },
        { '@id': 'role:prt', 'skos:prefLabel': { 'eng': 'Printer', 'deu': 'DruckerIn', 'ita': 'Stampatore' } },
        { '@id': 'role:pop', 'skos:prefLabel': { 'eng': 'Printer of plates', 'deu': 'PlattendruckerIn', 'ita': 'Printer of plates' } },
        { '@id': 'role:prm', 'skos:prefLabel': { 'eng': 'Printmaker', 'deu': 'DruckerIn / GrafikkünstlerIn', 'ita': 'Printmaker' } },
        { '@id': 'role:prc', 'skos:prefLabel': { 'eng': 'Process contact', 'deu': 'AnsprechpartnerIn', 'ita': 'Process contact' } },
        { '@id': 'role:pro', 'skos:prefLabel': { 'eng': 'Producer', 'deu': 'ProduzentIn', 'ita': 'Produttore' } },
        { '@id': 'role:prn', 'skos:prefLabel': { 'eng': 'Production company', 'deu': 'Produktionsfirma', 'ita': 'Production company' } },
        { '@id': 'role:prp', 'skos:prefLabel': { 'eng': 'Production place', 'deu': 'Produktionsort', 'ita': 'Production place' } },
        { '@id': 'role:prs', 'skos:prefLabel': { 'eng': 'Production designer', 'deu': 'AusstatterIn', 'ita': 'Production designer' } },
        { '@id': 'role:pmn', 'skos:prefLabel': { 'eng': 'Production manager', 'deu': 'ProduktionsmanagerIn', 'ita': 'Production manager' } },
        { '@id': 'role:prd', 'skos:prefLabel': { 'eng': 'Production personnel', 'deu': 'Produktionspersonal', 'ita': 'Production personnel' } },
        { '@id': 'role:prg', 'skos:prefLabel': { 'eng': 'Programmer', 'deu': 'ProgrammiererIn', 'ita': 'Programmer' } },
        { '@id': 'role:pdr', 'skos:prefLabel': { 'eng': 'Project director', 'deu': 'PrjektleiterIn', 'ita': 'Project director' } },
        { '@id': 'role:pfr', 'skos:prefLabel': { 'eng': 'Proofreader', 'deu': 'LektorIn', 'ita': 'Correttore' } },
        { '@id': 'role:prv', 'skos:prefLabel': { 'eng': 'Provider', 'deu': 'AnbieterIn / LieferantIn', 'ita': 'Provider' } },
        { '@id': 'role:pbl', 'skos:prefLabel': { 'eng': 'Publisher', 'deu': 'HerausgeberIn', 'ita': 'Editore' } },
        { '@id': 'role:pbd', 'skos:prefLabel': { 'eng': 'Publishing director', 'deu': 'VerlagsleiterIn', 'ita': 'Publishing director' } },
        { '@id': 'role:ppt', 'skos:prefLabel': { 'eng': 'Puppeteer', 'deu': 'PuppenspielerIn', 'ita': 'Puppeteer' } },
        { '@id': 'role:rdd', 'skos:prefLabel': { 'eng': 'Radio director', 'deu': 'Rund/Hörfunkdirektorin / RundfunkintendantIn', 'ita': 'Radio director' } },
        { '@id': 'role:rpc', 'skos:prefLabel': { 'eng': 'Radio producer', 'deu': 'RadioproduzentIn', 'ita': 'Radio producer' } },
        { '@id': 'role:rce', 'skos:prefLabel': { 'eng': 'Recording engineer', 'deu': 'TonmeisterIn', 'ita': 'Tecnico della registrazione' } },
        { '@id': 'role:rcd', 'skos:prefLabel': { 'eng': 'Recordist', 'deu': 'TontechnikerIn', 'ita': 'Recordist' } },
        { '@id': 'role:red', 'skos:prefLabel': { 'eng': 'Redaktor', 'deu': 'RedakteurIn', 'ita': 'Redaktor' } },
        { '@id': 'role:ren', 'skos:prefLabel': { 'eng': 'Renderer', 'deu': 'ReinzeichnerIn', 'ita': 'Renderer' } },
        { '@id': 'role:rpt', 'skos:prefLabel': { 'eng': 'Reporter', 'deu': 'ReporterIn / BerichterstatterIn', 'ita': 'Reporter' } },
        { '@id': 'role:rth', 'skos:prefLabel': { 'eng': 'Research team head', 'deu': 'Projektverantwortliche/r', 'ita': 'Direttore della ricerca' } },
        { '@id': 'role:rtm', 'skos:prefLabel': { 'eng': 'Research team member', 'deu': 'ProjektmitarbeiterIn', 'ita': 'Membro di un gruppo di ricerca' } },
        { '@id': 'role:res', 'skos:prefLabel': { 'eng': 'Researcher', 'deu': 'ForscherIn', 'ita': 'Ricercatore' } },
        { '@id': 'role:rsp', 'skos:prefLabel': { 'eng': 'Respondent', 'deu': 'Respondent', 'ita': 'Respondent' } },
        { '@id': 'role:rst', 'skos:prefLabel': { 'eng': 'Respondent-appellant', 'deu': 'Respondent-appellant', 'ita': 'Respondent-appellant' } },
        { '@id': 'role:rse', 'skos:prefLabel': { 'eng': 'Respondent-appellee', 'deu': 'Respondent-appellee', 'ita': 'Respondent-appellee' } },
        { '@id': 'role:rpy', 'skos:prefLabel': { 'eng': 'Responsible party', 'deu': 'Responsible party', 'ita': 'Responsible party' } },
        { '@id': 'role:rsg', 'skos:prefLabel': { 'eng': 'Restager', 'deu': 'WiederaufführunerIn', 'ita': 'Restager' } },
        { '@id': 'role:rsr', 'skos:prefLabel': { 'eng': 'Restorationist', 'deu': 'RestauratorIn', 'ita': 'Restorationist' } },
        { '@id': 'role:rev', 'skos:prefLabel': { 'eng': 'Reviewer', 'deu': 'KritikerIn', 'ita': 'Recensore' } },
        { '@id': 'role:rbr', 'skos:prefLabel': { 'eng': 'Rubricator', 'deu': 'Rubricator', 'ita': 'Rubricator' } },
        { '@id': 'role:sce', 'skos:prefLabel': { 'eng': 'Scenarist', 'deu': 'SzenentexterIn', 'ita': 'Scenografo' } },
        { '@id': 'role:sad', 'skos:prefLabel': { 'eng': 'Scientific advisor', 'deu': 'wissenschaftliche BeraterIn', 'ita': 'Consulente scientifico' } },
        { '@id': 'role:aus', 'skos:prefLabel': { 'eng': 'Screenwriter', 'deu': 'DrehbuchautorIn', 'ita': 'Sceneggiatore' } },
        { '@id': 'role:scr', 'skos:prefLabel': { 'eng': 'Scribe', 'deu': 'SchreiberIn', 'ita': 'Scribe' } },
        { '@id': 'role:scl', 'skos:prefLabel': { 'eng': 'Sculptor', 'deu': 'BildhauerIn', 'ita': 'Scultore' } },
        { '@id': 'role:spy', 'skos:prefLabel': { 'eng': 'Second party', 'deu': 'Second party', 'ita': 'Second party' } },
        { '@id': 'role:sec', 'skos:prefLabel': { 'eng': 'Secretary', 'deu': 'SekretärIn', 'ita': 'Secretary' } },
        { '@id': 'role:sll', 'skos:prefLabel': { 'eng': 'Seller', 'deu': 'VerkäuferIn', 'ita': 'Seller' } },
        { '@id': 'role:std', 'skos:prefLabel': { 'eng': 'Set designer', 'deu': 'AusstatterIn', 'ita': 'Set designer' } },
        { '@id': 'role:stg', 'skos:prefLabel': { 'eng': 'Setting', 'deu': 'Schauplatz', 'ita': 'Setting' } },
        { '@id': 'role:sgn', 'skos:prefLabel': { 'eng': 'Signer', 'deu': 'UnterzeichnerIn', 'ita': 'Signer' } },
        { '@id': 'role:sng', 'skos:prefLabel': { 'eng': 'Singer', 'deu': 'SängerIn', 'ita': 'Cantante' } },
        { '@id': 'role:sds', 'skos:prefLabel': { 'eng': 'Sound designer', 'deu': 'SounddesignerIn', 'ita': 'Progettista del suono' } },
        { '@id': 'role:spk', 'skos:prefLabel': { 'eng': 'Speaker', 'deu': 'SprecherIn', 'ita': 'Speaker' } },
        { '@id': 'role:spn', 'skos:prefLabel': { 'eng': 'Sponsor', 'deu': 'FördererIn', 'ita': 'Sponsor' } },
        { '@id': 'role:sgd', 'skos:prefLabel': { 'eng': 'Stage director', 'deu': '(Theater)RegisseurIn', 'ita': 'Stage director' } },
        { '@id': 'role:stm', 'skos:prefLabel': { 'eng': 'Stage manager', 'deu': 'InspizientIn / BühnenmeisterIn', 'ita': 'Stage manager' } },
        { '@id': 'role:stn', 'skos:prefLabel': { 'eng': 'Standards body', 'deu': 'Normkomitee', 'ita': 'Standards body' } },
        { '@id': 'role:str', 'skos:prefLabel': { 'eng': 'Stereotyper', 'deu': 'Stereotyper', 'ita': 'Stereotyper' } },
        { '@id': 'role:stl', 'skos:prefLabel': { 'eng': 'Storyteller', 'deu': 'ErzählerIn', 'ita': 'Storyteller' } },
        { '@id': 'role:sht', 'skos:prefLabel': { 'eng': 'Supporting host', 'deu': 'UnterstützerIn', 'ita': 'Supporting host' } },
        { '@id': 'role:srv', 'skos:prefLabel': { 'eng': 'Surveyor', 'deu': 'VermesserIn', 'ita': 'Surveyor' } },
        { '@id': 'role:tch', 'skos:prefLabel': { 'eng': 'Teacher', 'deu': 'LehrerIn', 'ita': 'Teacher' } },
        { '@id': 'role:tcd', 'skos:prefLabel': { 'eng': 'Technical director', 'deu': 'Technische/r DirektorIn', 'ita': 'Technical director' } },
        { '@id': 'role:technicalinspector', 'skos:prefLabel': { 'eng': 'Technical Inspector', 'deu': 'Technische/r PrüferIn', 'ita': 'Ispettore tecnico' } },
        { '@id': 'role:technicaltranslator', 'skos:prefLabel': { 'eng': 'Technical Translator', 'deu': 'Technische/r UmsetzerIn', 'ita': 'Traduttore Tecnico' } },
        { '@id': 'role:tld', 'skos:prefLabel': { 'eng': 'Television director', 'deu': 'FernsehintendantIn', 'ita': 'Television director' } },
        { '@id': 'role:tlp', 'skos:prefLabel': { 'eng': 'Television producer', 'deu': 'FernsehproduzentIn', 'ita': 'Television producer' } },
        { '@id': 'role:textprocessor', 'skos:prefLabel': { 'eng': 'Text Processor', 'deu': 'TextbearbeiterIn', 'ita': 'Estensore del testo' } },
        { '@id': 'role:ths', 'skos:prefLabel': { 'eng': 'Thesis advisor', 'deu': 'DissertationsbetreuerIn', 'ita': 'Relatore' } },
        { '@id': 'role:trc', 'skos:prefLabel': { 'eng': 'Transcriber', 'deu': 'Transcriber', 'ita': 'Transcriber' } },
        { '@id': 'role:trl', 'skos:prefLabel': { 'eng': 'Translator', 'deu': 'ÜbersetzerIn', 'ita': 'Traduttore' } },
        { '@id': 'role:tyd', 'skos:prefLabel': { 'eng': 'Type designer', 'deu': 'SchriftdesignerIn / SchriftentwerferIn', 'ita': 'Type designer' } },
        { '@id': 'role:tyg', 'skos:prefLabel': { 'eng': 'Typographer', 'deu': 'TypographIn', 'ita': 'Tipografo' } },
        { '@id': 'role:uploader', 'skos:prefLabel': { 'eng': 'Uploader', 'deu': 'Uploader', 'ita': 'Uploader' } },
        { '@id': 'role:vdg', 'skos:prefLabel': { 'eng': 'Videographer', 'deu': 'VideoanbieterIn', 'ita': 'Videografo' } },
        { '@id': 'role:vac', 'skos:prefLabel': { 'eng': 'Voice actor', 'deu': 'SynchronsprecherIn', 'ita': 'Voice actor' } },
        { '@id': 'role:wit', 'skos:prefLabel': { 'eng': 'Witness', 'deu': 'ZeugIn', 'ita': 'Witness' } },
        { '@id': 'role:wde', 'skos:prefLabel': { 'eng': 'Wood-engraver', 'deu': 'HolzstecherIn', 'ita': 'Xilografo' } },
        { '@id': 'role:wdc', 'skos:prefLabel': { 'eng': 'Woodcutter', 'deu': 'HolzschneiderIn', 'ita': 'Woodcutter' } },
        { '@id': 'role:wam', 'skos:prefLabel': { 'eng': 'Writer of accompanying material', 'deu': 'AutorIn von Begleitmaterial', 'ita': 'Autore del materiale allegato' } },
        { '@id': 'role:wac', 'skos:prefLabel': { 'eng': 'Writer of added commentary', 'deu': 'Writer of added commentary', 'ita': 'Writer of added commentary' } },
        { '@id': 'role:wal', 'skos:prefLabel': { 'eng': 'Writer of added lyrics', 'deu': 'Writer of added lyrics', 'ita': 'Writer of added lyrics' } },
        { '@id': 'role:wat', 'skos:prefLabel': { 'eng': 'Writer of added text', 'deu': 'Writer of added text', 'ita': 'Writer of added text' } },
        { '@id': 'role:win', 'skos:prefLabel': { 'eng': 'Writer of introduction', 'deu': 'Writer of introduction', 'ita': 'Writer of introduction' } },
        { '@id': 'role:wpr', 'skos:prefLabel': { 'eng': 'Writer of preface', 'deu': 'Writer of preface', 'ita': 'Writer of preface' } },
        { '@id': 'role:wst', 'skos:prefLabel': { 'eng': 'Writer of supplementary textual content', 'deu': 'Writer of supplementary textual content', 'ita': 'Writer of supplementary textual content' } }
      ],
      loaded: true
    },
    'irrolepredicate': {
      terms: [
        { '@id': 'role:aut', 'skos:prefLabel': { 'eng': 'Author', 'deu': 'Autor', 'ita': 'Author' } },
        { '@id': 'role:edt', 'skos:prefLabel': { 'eng': 'Editor', 'deu': 'EditorIn', 'ita': 'Curatore' } }
      ],
      loaded: true
    },
    'mimetypes': {
      terms: [
        { '@id': 'image/jpeg', 'skos:notation': ['jpeg', 'jpg'], 'skos:prefLabel': { 'eng': 'JPG/JPEG' } },
        { '@id': 'image/tiff', 'skos:notation': ['tiff', 'tif'], 'skos:prefLabel': { 'eng': 'TIFF' } },
        { '@id': 'image/gif', 'skos:notation': ['gif'], 'skos:prefLabel': { 'eng': 'GIF' } },
        { '@id': 'image/png', 'skos:notation': ['png'], 'skos:prefLabel': { 'eng': 'PNG' } },
        { '@id': 'image/x-ms-bmp', 'skos:notation': ['bmp'], 'skos:prefLabel': { 'eng': 'BMP' } },
        { '@id': 'audio/wav', 'skos:notation': ['wav'], 'skos:prefLabel': { 'eng': 'WAVE' } },
        { '@id': 'audio/mpeg', 'skos:notation': ['mp3'], 'skos:prefLabel': { 'eng': 'MP3' } },
        { '@id': 'audio/flac', 'skos:notation': ['flac'], 'skos:prefLabel': { 'eng': 'FLAC' } },
        { '@id': 'audio/ogg', 'skos:notation': ['ogg'], 'skos:prefLabel': { 'eng': 'Ogg' } },
        { '@id': 'video/mpeg', 'skos:notation': ['mpg'], 'skos:prefLabel': { 'eng': 'MPEG' } },
        { '@id': 'video/avi', 'skos:notation': ['avi'], 'skos:prefLabel': { 'eng': 'AVI' } },
        { '@id': 'video/mp4', 'skos:notation': ['mp4'], 'skos:prefLabel': { 'eng': 'MPEG-4' } },
        { '@id': 'video/quicktime', 'skos:notation': ['qt', 'mov'], 'skos:prefLabel': { 'eng': 'Quicktime' } },
        { '@id': 'video/x-matroska', 'skos:notation': ['mkv'], 'skos:prefLabel': { 'eng': 'MKV' } },
        { '@id': 'application/x-iso9660-image', 'skos:notation': ['iso'], 'skos:prefLabel': { 'eng': 'ISO' } },
        { '@id': 'application/octet-stream', 'skos:notation': [], 'skos:prefLabel': { 'eng': 'Data' } },
        { '@id': 'application/pdf', 'skos:notation': ['pdf'], 'skos:prefLabel': { 'eng': 'PDF' } },
        { '@id': 'text/plain', 'skos:notation': ['txt'], 'skos:prefLabel': { 'eng': '.txt' } },
        { '@id': 'application/msword', 'skos:notation': ['doc'], 'skos:prefLabel': { 'eng': '.doc' } },
        { '@id': 'application/vnd.ms-excel', 'skos:notation': ['xls'], 'skos:prefLabel': { 'eng': '.xls' } },
        { '@id': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'skos:notation': ['docx'], 'skos:prefLabel': { 'eng': '.docx' } },
        { '@id': 'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'skos:notation': ['dotx'], 'skos:prefLabel': { 'eng': '.dotx' } },
        { '@id': 'application/vnd.ms-word.document.macroEnabled.12', 'skos:notation': ['docm'], 'skos:prefLabel': { 'eng': '.docm' } },
        { '@id': 'application/vnd.ms-word.template.macroEnabled.12', 'skos:notation': ['dotm'], 'skos:prefLabel': { 'eng': '.dotm' } },
        { '@id': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'skos:notation': ['xlsx'], 'skos:prefLabel': { 'eng': '.xlsx' } },
        { '@id': 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'skos:notation': ['xltx'], 'skos:prefLabel': { 'eng': '.xltx' } },
        { '@id': 'application/vnd.ms-excel.sheet.macroEnabled.12', 'skos:notation': ['xlsm'], 'skos:prefLabel': { 'eng': '.xlsm' } },
        { '@id': 'application/vnd.ms-excel.template.macroEnabled.12', 'skos:notation': ['xltm'], 'skos:prefLabel': { 'eng': '.xltm' } },
        { '@id': 'application/vnd.ms-excel.addin.macroEnabled.12', 'skos:notation': ['xlam'], 'skos:prefLabel': { 'eng': '.xlam' } },
        { '@id': 'application/vnd.ms-excel.sheet.binary.macroEnabled.12', 'skos:notation': ['xlsb'], 'skos:prefLabel': { 'eng': '.xlsb' } },
        { '@id': 'application/vnd.ms-powerpoint', 'skos:notation': ['ppt'], 'skos:prefLabel': { 'eng': '.ppt' } },
        { '@id': 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'skos:notation': ['pptx'], 'skos:prefLabel': { 'eng': '.pptx' } },
        { '@id': 'application/vnd.openxmlformats-officedocument.presentationml.template', 'skos:notation': ['potx'], 'skos:prefLabel': { 'eng': '.potx' } },
        { '@id': 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'skos:notation': ['ppsx'], 'skos:prefLabel': { 'eng': '.ppsx' } },
        { '@id': 'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'skos:notation': ['ppam'], 'skos:prefLabel': { 'eng': '.ppam' } },
        { '@id': 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'skos:notation': ['pptm'], 'skos:prefLabel': { 'eng': '.pptm' } },
        { '@id': 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'skos:notation': ['potm'], 'skos:prefLabel': { 'eng': '.potm' } },
        { '@id': 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12', 'skos:notation': ['ppsm'], 'skos:prefLabel': { 'eng': '.ppsm' } },
        { '@id': 'application/vnd.oasis.opendocument.text', 'skos:notation': ['odt'], 'skos:prefLabel': { 'eng': '.odt' } },
        { '@id': 'application/vnd.oasis.opendocument.text-template', 'skos:notation': ['ott'], 'skos:prefLabel': { 'eng': '.ott' } },
        { '@id': 'application/vnd.oasis.opendocument.text-web', 'skos:notation': ['oth'], 'skos:prefLabel': { 'eng': '.oth' } },
        { '@id': 'application/vnd.oasis.opendocument.text-master', 'skos:notation': ['odm'], 'skos:prefLabel': { 'eng': '.odm' } },
        { '@id': 'application/vnd.oasis.opendocument.graphics', 'skos:notation': ['odg'], 'skos:prefLabel': { 'eng': '.odg' } },
        { '@id': 'application/vnd.oasis.opendocument.graphics-template', 'skos:notation': ['otg'], 'skos:prefLabel': { 'eng': '.otg' } },
        { '@id': 'application/vnd.oasis.opendocument.presentation', 'skos:notation': ['odp'], 'skos:prefLabel': { 'eng': '.odp' } },
        { '@id': 'application/vnd.oasis.opendocument.presentation-template', 'skos:notation': ['otp'], 'skos:prefLabel': { 'eng': '.otp' } },
        { '@id': 'application/vnd.oasis.opendocument.spreadsheet', 'skos:notation': ['ods'], 'skos:prefLabel': { 'eng': '.ods' } },
        { '@id': 'application/vnd.oasis.opendocument.spreadsheet-template', 'skos:notation': ['ots'], 'skos:prefLabel': { 'eng': '.ots' } },
        { '@id': 'application/vnd.oasis.opendocument.chart', 'skos:notation': ['odc'], 'skos:prefLabel': { 'eng': '.odc' } },
        { '@id': 'application/vnd.oasis.opendocument.formula', 'skos:notation': ['odf'], 'skos:prefLabel': { 'eng': '.odf' } },
        { '@id': 'application/vnd.oasis.opendocument.database', 'skos:notation': ['odb'], 'skos:prefLabel': { 'eng': '.odb' } },
        { '@id': 'application/vnd.oasis.opendocument.image', 'skos:notation': ['odi'], 'skos:prefLabel': { 'eng': '.odi' } }
      ],
      loaded: true
    },
    'licenses': {
      terms: [
        { '@id': 'http://rightsstatements.org/vocab/InC/1.0/', 'skos:prefLabel': { 'eng': '© All rights reserved' }, 'img': 'cc-by.png' },
        { '@id': 'http://creativecommons.org/licenses/by/4.0/', 'skos:prefLabel': { 'eng': 'CC BY 4.0 International' }, 'img': 'cc-by.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc/4.0/', 'skos:prefLabel': { 'eng': 'CC BY-NC 4.0 International' }, 'img': 'cc-by-nc.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc-nd/4.0/', 'skos:prefLabel': { 'eng': 'CC BY-NC-ND 4.0 International' }, 'img': 'cc-by-nc-nd.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc-sa/4.0/', 'skos:prefLabel': { 'eng': 'CC BY-NC-SA 4.0 International' }, 'img': 'cc-by-nc-sa.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nd/4.0/', 'skos:prefLabel': { 'eng': 'CC BY-ND 4.0 International' }, 'img': 'cc-by-nd.png' },
        { '@id': 'http://creativecommons.org/licenses/by-sa/4.0/', 'skos:prefLabel': { 'eng': 'CC BY-SA 4.0 International' }, 'img': 'cc-by-sa.png' }
      ],
      loaded: true
    },
    'alllicenses': {
      terms: [
        { '@id': 'http://rightsstatements.org/vocab/InC/1.0/', 'skos:prefLabel': { 'eng': '© All rights reserved' }, 'img': 'cc-by.png' },
        { '@id': 'http://creativecommons.org/licenses/by/4.0/', 'skos:prefLabel': { 'eng': 'CC BY 4.0 International' }, 'img': 'cc-by.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc/4.0/', 'skos:prefLabel': { 'eng': 'CC BY-NC 4.0 International' }, 'img': 'cc-by-nc.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc-nd/4.0/', 'skos:prefLabel': { 'eng': 'CC BY-NC-ND 4.0 International' }, 'img': 'cc-by-nc-nd.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc-sa/4.0/', 'skos:prefLabel': { 'eng': 'CC BY-NC-SA 4.0 International' }, 'img': 'cc-by-nc-sa.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nd/4.0/', 'skos:prefLabel': { 'eng': 'CC BY-ND 4.0 International' }, 'img': 'cc-by-nd.png' },
        { '@id': 'http://creativecommons.org/licenses/by-sa/4.0/', 'skos:prefLabel': { 'eng': 'CC BY-SA 4.0 International' }, 'img': 'cc-by-sa.png' },
        { '@id': 'http://creativecommons.org/licenses/by/3.0/', 'skos:prefLabel': { 'eng': 'CC BY 3.0 Unported' }, 'img': 'cc-by.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc/3.0/', 'skos:prefLabel': { 'eng': 'CC BY-NC 3.0 Unported' }, 'img': 'cc-by-nc.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc-nd/3.0/', 'skos:prefLabel': { 'eng': 'CC BY-NC-ND 3.0 Unported' }, 'img': 'cc-by-nc-nd.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc-sa/3.0/', 'skos:prefLabel': { 'eng': 'CC BY-NC-SA 3.0 Unported' }, 'img': 'cc-by-nc-sa.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nd/3.0/', 'skos:prefLabel': { 'eng': 'CC BY-ND 3.0 Unported' }, 'img': 'cc-by-nd.png' },
        { '@id': 'http://creativecommons.org/licenses/by-sa/3.0/', 'skos:prefLabel': { 'eng': 'CC BY-SA 3.0 Unported' }, 'img': 'cc-by-sa.png' },
        { '@id': 'http://creativecommons.org/licenses/by/3.0/at/', 'skos:prefLabel': { 'eng': 'CC BY 3.0 Austria' }, 'img': 'cc-by.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc/3.0/at/', 'skos:prefLabel': { 'eng': 'CC BY-NC 3.0 Austria' }, 'img': 'cc-by-nc.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc-nd/3.0/at/', 'skos:prefLabel': { 'eng': 'CC BY-NC-ND 3.0 Austria' }, 'img': 'cc-by-nc-nd.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc-sa/3.0/at/', 'skos:prefLabel': { 'eng': 'CC BY-NC-SA 3.0 Austria' }, 'img': 'cc-by-nc-sa.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nd/3.0/at/', 'skos:prefLabel': { 'eng': 'CC BY-ND 3.0 Austria' }, 'img': 'cc-by-nd.png' },
        { '@id': 'http://creativecommons.org/licenses/by-sa/3.0/at/', 'skos:prefLabel': { 'eng': 'CC BY-SA 3.0 Austria' }, 'img': 'cc-by-sa.png' },
        { '@id': 'http://creativecommons.org/licenses/by/2.0/', 'skos:prefLabel': { 'eng': 'CC BY 2.0 Generic' }, 'img': 'cc-by.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc/2.0/', 'skos:prefLabel': { 'eng': 'CC BY-NC 2.0 Generic' }, 'img': 'cc-by-nc.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc-nd/2.0/', 'skos:prefLabel': { 'eng': 'CC BY-NC-ND 2.0 Generic' }, 'img': 'cc-by-nc-nd.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc-sa/2.0/', 'skos:prefLabel': { 'eng': 'CC BY-NC-SA 2.0 Generic' }, 'img': 'cc-by-nc-sa.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nd/2.0/', 'skos:prefLabel': { 'eng': 'CC BY-ND 2.0 Generic' }, 'img': 'cc-by-nd.png' },
        { '@id': 'http://creativecommons.org/licenses/by-sa/2.0/', 'skos:prefLabel': { 'eng': 'CC BY-SA 2.0 Generic' }, 'img': 'cc-by-sa.png' },
        { '@id': 'http://creativecommons.org/licenses/by/2.0/at/', 'skos:prefLabel': { 'eng': 'CC BY 2.0 Austria' }, 'img': 'cc-by.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc/2.0/at/', 'skos:prefLabel': { 'eng': 'CC BY-NC 2.0 Austria' }, 'img': 'cc-by-nc.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc-nd/2.0/at/', 'skos:prefLabel': { 'eng': 'CC BY-NC-ND 2.0 Austria' }, 'img': 'cc-by-nc-nd.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nc-sa/2.0/at/', 'skos:prefLabel': { 'eng': 'CC BY-NC-SA 2.0 Austria' }, 'img': 'cc-by-nc-sa.png' },
        { '@id': 'http://creativecommons.org/licenses/by-nd/2.0/at/', 'skos:prefLabel': { 'eng': 'CC BY-ND 2.0 Austria' }, 'img': 'cc-by-nd.png' },
        { '@id': 'http://creativecommons.org/licenses/by-sa/2.0/at/', 'skos:prefLabel': { 'eng': 'CC BY-SA 2.0 Austria' }, 'img': 'cc-by-sa.png' }
      ],
      loaded: true
    },
    'uncefact': {
      terms: [
        { '@id': 'MTR', 'skos:prefLabel': { 'eng': 'm' } },
        { '@id': 'CMT', 'skos:prefLabel': { 'eng': 'cm' } },
        { '@id': 'MMT', 'skos:prefLabel': { 'eng': 'mm' } },
        { '@id': 'GRM', 'skos:prefLabel': { 'eng': 'g' } },
        { '@id': 'KGM', 'skos:prefLabel': { 'eng': 'kg' } }
      ],
      loaded: true
    },
    'uncefactsize': {
      terms: [
        { '@id': 'MTR', 'skos:prefLabel': { 'eng': 'm' } },
        { '@id': 'CMT', 'skos:prefLabel': { 'eng': 'cm' } },
        { '@id': 'MMT', 'skos:prefLabel': { 'eng': 'mm' } }
      ],
      loaded: true
    },
    'uncefactweight': {
      terms: [
        { '@id': 'GRM', 'skos:prefLabel': { 'eng': 'g' } },
        { '@id': 'KGM', 'skos:prefLabel': { 'eng': 'kg' } }
      ],
      loaded: true
    },
    'carriertype': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/2FTX-ZPZV', 'skos:prefLabel': { 'eng': 'ADAT' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/A3BG-65F5', 'skos:prefLabel': { 'eng': 'CD' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/4CQF-7HHF', 'skos:prefLabel': { 'eng': 'DAT' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/HXSS-NBZ4', 'skos:prefLabel': { 'eng': 'audiocassette' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/X627-FCV9', 'skos:prefLabel': { 'eng': 'tape' } }
      ],
      loaded: true
    },
    'resourcetype': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/44TN-P1S0', 'skos:prefLabel': { 'eng': 'image' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/69ZZ-2KGX', 'skos:prefLabel': { 'eng': 'text' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/GXS7-ENXJ', 'skos:prefLabel': { 'eng': 'collection' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/B0Y6-GYT8', 'skos:prefLabel': { 'eng': 'video' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/7AVS-Y482', 'skos:prefLabel': { 'eng': 'data' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/8YB5-1M0J', 'skos:prefLabel': { 'eng': 'sound' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/8MY0-BQDQ', 'skos:prefLabel': { 'eng': 'container' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/T8GH-F4V8', 'skos:prefLabel': { 'eng': 'resource' } }
      ],
      loaded: true
    },
    'genre': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/9E94-E3F8', 'skos:prefLabel': { 'eng': 'Diplomarbeit' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/P2YP-BMND', 'skos:prefLabel': { 'eng': 'Masterarbeit' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/1PHE-7VMS', 'skos:prefLabel': { 'eng': 'Dissertation' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/ST05-F6SP', 'skos:prefLabel': { 'eng': 'Magisterarbeit' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/9ZSV-CVJH', 'skos:prefLabel': { 'eng': 'Habilitation' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/H1TF-SDX1', 'skos:prefLabel': { 'eng': 'Master-Thesis (ULG)' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/QNV1-N1EC', 'skos:prefLabel': { 'eng': 'action' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/31DA-295K', 'skos:prefLabel': { 'eng': 'anime' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/DB5C-1Y4H', 'skos:prefLabel': { 'eng': 'biopic' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/MKKZ-BH2Q', 'skos:prefLabel': { 'eng': 'discussion' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/WVGH-KT47', 'skos:prefLabel': { 'eng': 'documentary film' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/XFDY-E13E', 'skos:prefLabel': { 'eng': 'drama' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/GZQE-YK3K', 'skos:prefLabel': { 'eng': 'fantasy' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/KM7A-FYPP', 'skos:prefLabel': { 'eng': 'television film' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/MN1Y-YFCF', 'skos:prefLabel': { 'eng': 'historical film' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/G2VQ-GEEK', 'skos:prefLabel': { 'eng': 'horror' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/GFM4-2J48', 'skos:prefLabel': { 'eng': 'comedy' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/NQVM-6B2Y', 'skos:prefLabel': { 'eng': 'crime' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/BPAJ-NQ8N', 'skos:prefLabel': { 'eng': 'short film' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/AHWA-YKFH', 'skos:prefLabel': { 'eng': 'romance film' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/7RZF-5216', 'skos:prefLabel': { 'eng': 'musical' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/A1B4-K5MK', 'skos:prefLabel': { 'eng': 'newscast' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/B4R8-Z419', 'skos:prefLabel': { 'eng': 'romance' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/XZ5S-JEJ5', 'skos:prefLabel': { 'eng': 'satire' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/YV6T-SWAF', 'skos:prefLabel': { 'eng': 'science fiction' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/A8HT-N1QB', 'skos:prefLabel': { 'eng': 'series' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/1VZT-KE1S', 'skos:prefLabel': { 'eng': 'thriller' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/PCK6-NYPG', 'skos:prefLabel': { 'eng': 'tragicomedy' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/2PV5-5V2H', 'skos:prefLabel': { 'eng': 'entertainment' } }
      ],
      loaded: true
    },
    'thesisgenre': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/9E94-E3F8', 'skos:prefLabel': { 'eng': 'Diplomarbeit' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/P2YP-BMND', 'skos:prefLabel': { 'eng': 'Masterarbeit' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/1PHE-7VMS', 'skos:prefLabel': { 'eng': 'Dissertation' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/ST05-F6SP', 'skos:prefLabel': { 'eng': 'Magisterarbeit' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/9ZSV-CVJH', 'skos:prefLabel': { 'eng': 'Habilitation' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/H1TF-SDX1', 'skos:prefLabel': { 'eng': 'Master-Thesis (ULG)' } }
      ],
      loaded: true
    },
    'moviegenre': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/QNV1-N1EC', 'skos:prefLabel': { 'eng': 'action' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/31DA-295K', 'skos:prefLabel': { 'eng': 'anime' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/DB5C-1Y4H', 'skos:prefLabel': { 'eng': 'biopic' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/MKKZ-BH2Q', 'skos:prefLabel': { 'eng': 'discussion' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/WVGH-KT47', 'skos:prefLabel': { 'eng': 'documentary film' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/XFDY-E13E', 'skos:prefLabel': { 'eng': 'drama' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/GZQE-YK3K', 'skos:prefLabel': { 'eng': 'fantasy' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/KM7A-FYPP', 'skos:prefLabel': { 'eng': 'television film' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/MN1Y-YFCF', 'skos:prefLabel': { 'eng': 'historical film' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/G2VQ-GEEK', 'skos:prefLabel': { 'eng': 'horror' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/GFM4-2J48', 'skos:prefLabel': { 'eng': 'comedy' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/NQVM-6B2Y', 'skos:prefLabel': { 'eng': 'crime' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/BPAJ-NQ8N', 'skos:prefLabel': { 'eng': 'short film' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/AHWA-YKFH', 'skos:prefLabel': { 'eng': 'romance film' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/7RZF-5216', 'skos:prefLabel': { 'eng': 'musical' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/A1B4-K5MK', 'skos:prefLabel': { 'eng': 'newscast' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/B4R8-Z419', 'skos:prefLabel': { 'eng': 'romance' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/XZ5S-JEJ5', 'skos:prefLabel': { 'eng': 'satire' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/YV6T-SWAF', 'skos:prefLabel': { 'eng': 'science fiction' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/A8HT-N1QB', 'skos:prefLabel': { 'eng': 'series' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/1VZT-KE1S', 'skos:prefLabel': { 'eng': 'thriller' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/PCK6-NYPG', 'skos:prefLabel': { 'eng': 'tragicomedy' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/2PV5-5V2H', 'skos:prefLabel': { 'eng': 'entertainment' } }
      ],
      loaded: true
    },
    'objecttype': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/VKA6-9XTY', 'skos:prefLabel': { 'eng': 'journal article' }, 'skos:definition': { 'eng': 'An article on a particular topic and published in a journal issue.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/T023-BGTD', 'skos:prefLabel': { 'eng': 'preprint' }, 'skos:definition': { 'eng': 'Pre-print describes the first draft of the article - before peer-review, even before any contact with a publisher. This use is common amongst academics for whom the key modification of an article is the peer-review process. Another use of the term pre-print is for the finished article, reviewed and amended, ready and accepted for publication - but separate from the version that is type-set or formatted by the publisher. This use is more common amongst publishers, for whom the final and significant stage of modification to an article is the arrangement of the material for putting to print.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/489N-Y6VX', 'skos:prefLabel': { 'eng': 'working paper' }, 'skos:definition': { 'eng': 'An unpublished paper, usually circulated privately among a small group of peers, to provide information or with a request for comments or editorial improvement.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/JMAV-7F3R', 'skos:prefLabel': { 'eng': 'report' }, 'skos:definition': { 'eng': 'A report is a separately published record of research findings, research still in progress, or other technical findings, usually bearing a report number and sometimes a grant number assigned by the funding agency. Also, an official record of the activities of a committee or corporate entity, the proceedings of a government body, or an investigation by an agency, whether published or private, usually archived or submitted to a higher authority, voluntarily or under mandate. In a more general sense, any formal account of facts or information related to a specific event or phenomenon, sometimes given at regular intervals.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/JJKV-B1CG', 'skos:prefLabel': { 'eng': 'review' }, 'skos:definition': { 'eng': 'A review of others\' published or performed works (e.g., books, films, sound recordings, theater, etc.).' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/MF25-FDGW', 'skos:prefLabel': { 'eng': 'contribution to journal' }, 'skos:definition': { 'eng': 'A contribution to a journal denotes a work published in a journal. If applicable sub-terms should be chosen.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/47QB-8QF1', 'skos:prefLabel': { 'eng': 'book' }, 'skos:definition': { 'eng': 'Items comprising a collection of leaves of paper, parchment, wood, stiffened textile, ivory, metal tablets, or other flat material, that are blank, written on, or printed, and are strung or bound together in a volume.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/XA52-09WA', 'skos:prefLabel': { 'eng': 'book part' }, 'skos:definition': { 'eng': 'A defined chapter or section of a book, usually with a separate title or number.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/1PHE-7VMS', 'skos:prefLabel': { 'eng': 'dissertation' }, 'skos:definition': { 'eng': 'dissertation' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/QKDF-E5HA', 'skos:prefLabel': { 'eng': 'conference object' }, 'skos:definition': { 'eng': 'All kind of digital resources contributed to a conference, like conference presentation (slides), conference report, conference lecture, abstracts, demonstrations.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/F4JN-ZST0', 'skos:prefLabel': { 'eng': 'lecture' }, 'skos:definition': { 'eng': 'Expositions of a given subject delivered before an audience or class, especially for the purposes of instruction.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/KW6N-2VTP', 'skos:prefLabel': { 'eng': 'dataset' }, 'skos:definition': { 'eng': 'A collection of related facts and data encoded in a defined structure.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/N35H-PDEE', 'skos:prefLabel': { 'eng': 'annotation' }, 'skos:definition': { 'eng': 'An annotation in the sense of a legal note is a legally explanatory comment on a decision handed down by a court or arbitral tribunal.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/PYRE-RAWJ', 'skos:prefLabel': { 'eng': 'other' }, 'skos:definition': { 'eng': 'An object type not explicitly addressed in any concept in this vocabulary.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/A52A-CWMM', 'skos:prefLabel': { 'eng': 'map' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/GBWA-JJP8', 'skos:prefLabel': { 'eng': 'letter' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/EWZ9-3MPH', 'skos:prefLabel': { 'eng': 'musical composition' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/8A6X-FKB1', 'skos:prefLabel': { 'eng': 'musical notation' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/7CAB-P987', 'skos:prefLabel': { 'eng': 'photograph' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/YBTD-Q94N', 'skos:prefLabel': { 'eng': 'railroad bridge' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/QT7P-HNZB', 'skos:prefLabel': { 'eng': 'tribe (kinship group)' } }
      ],
      loaded: true
    },
    'irobjecttype': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/VKA6-9XTY', 'skos:prefLabel': { 'eng': 'journal article' }, 'skos:definition': { 'eng': 'An article on a particular topic and published in a journal issue.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/T023-BGTD', 'skos:prefLabel': { 'eng': 'preprint' }, 'skos:definition': { 'eng': 'Pre-print describes the first draft of the article - before peer-review, even before any contact with a publisher. This use is common amongst academics for whom the key modification of an article is the peer-review process. Another use of the term pre-print is for the finished article, reviewed and amended, ready and accepted for publication - but separate from the version that is type-set or formatted by the publisher. This use is more common amongst publishers, for whom the final and significant stage of modification to an article is the arrangement of the material for putting to print.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/489N-Y6VX', 'skos:prefLabel': { 'eng': 'working paper' }, 'skos:definition': { 'eng': 'An unpublished paper, usually circulated privately among a small group of peers, to provide information or with a request for comments or editorial improvement.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/JMAV-7F3R', 'skos:prefLabel': { 'eng': 'report' }, 'skos:definition': { 'eng': 'A report is a separately published record of research findings, research still in progress, or other technical findings, usually bearing a report number and sometimes a grant number assigned by the funding agency. Also, an official record of the activities of a committee or corporate entity, the proceedings of a government body, or an investigation by an agency, whether published or private, usually archived or submitted to a higher authority, voluntarily or under mandate. In a more general sense, any formal account of facts or information related to a specific event or phenomenon, sometimes given at regular intervals.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/JJKV-B1CG', 'skos:prefLabel': { 'eng': 'review' }, 'skos:definition': { 'eng': 'A review of others\' published or performed works (e.g., books, films, sound recordings, theater, etc.).' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/MF25-FDGW', 'skos:prefLabel': { 'eng': 'contribution to journal' }, 'skos:definition': { 'eng': 'A contribution to a journal denotes a work published in a journal. If applicable sub-terms should be chosen.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/47QB-8QF1', 'skos:prefLabel': { 'eng': 'book' }, 'skos:definition': { 'eng': 'Items comprising a collection of leaves of paper, parchment, wood, stiffened textile, ivory, metal tablets, or other flat material, that are blank, written on, or printed, and are strung or bound together in a volume.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/XA52-09WA', 'skos:prefLabel': { 'eng': 'book part' }, 'skos:definition': { 'eng': 'A defined chapter or section of a book, usually with a separate title or number.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/1PHE-7VMS', 'skos:prefLabel': { 'eng': 'dissertation' }, 'skos:definition': { 'eng': 'dissertation' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/QKDF-E5HA', 'skos:prefLabel': { 'eng': 'conference object' }, 'skos:definition': { 'eng': 'All kind of digital resources contributed to a conference, like conference presentation (slides), conference report, conference lecture, abstracts, demonstrations.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/F4JN-ZST0', 'skos:prefLabel': { 'eng': 'lecture' }, 'skos:definition': { 'eng': 'Expositions of a given subject delivered before an audience or class, especially for the purposes of instruction.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/KW6N-2VTP', 'skos:prefLabel': { 'eng': 'dataset' }, 'skos:definition': { 'eng': 'A collection of related facts and data encoded in a defined structure.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/N35H-PDEE', 'skos:prefLabel': { 'eng': 'annotation' }, 'skos:definition': { 'eng': 'An annotation in the sense of a legal note is a legally explanatory comment on a decision handed down by a court or arbitral tribunal.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/PYRE-RAWJ', 'skos:prefLabel': { 'eng': 'other' }, 'skos:definition': { 'eng': 'An object type not explicitly addressed in any concept in this vocabulary.' } }
      ],
      loaded: true
    },
    'irobjecttypearticle': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/VKA6-9XTY', 'skos:prefLabel': { 'eng': 'journal article' }, 'skos:definition': { 'eng': 'An article on a particular topic and published in a journal issue.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/JMAV-7F3R', 'skos:prefLabel': { 'eng': 'report' }, 'skos:definition': { 'eng': 'A report is a separately published record of research findings, research still in progress, or other technical findings, usually bearing a report number and sometimes a grant number assigned by the funding agency. Also, an official record of the activities of a committee or corporate entity, the proceedings of a government body, or an investigation by an agency, whether published or private, usually archived or submitted to a higher authority, voluntarily or under mandate. In a more general sense, any formal account of facts or information related to a specific event or phenomenon, sometimes given at regular intervals.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/JJKV-B1CG', 'skos:prefLabel': { 'eng': 'review' }, 'skos:definition': { 'eng': 'A review of others\' published or performed works (e.g., books, films, sound recordings, theater, etc.).' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/PYRE-RAWJ', 'skos:prefLabel': { 'eng': 'other' }, 'skos:definition': { 'eng': 'An object type not explicitly addressed in any concept in this vocabulary.' } }
      ],
      loaded: true
    },
    'accessright': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/QW5R-NG4J', 'skos:prefLabel': { 'eng': 'open access' }, 'skos:definition': { 'eng': 'Open access refers to a resource that is immediately and permanently online, and free for all on the Web, without financial and technical barriers.The resource is either stored in the repository or referenced to an external journal or trustworthy archive.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/AVFC-ZZSZ', 'skos:prefLabel': { 'eng': 'embargoed access' }, 'skos:definition': { 'eng': 'Embargoed access refers to a resource that is metadata only access until released for open access on a certain date. Embargoes can be required by publishers and funders policies, or set by the author (e.g such as in the case of theses and dissertations).' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/KC3K-CCGM', 'skos:prefLabel': { 'eng': 'restricted access' }, 'skos:definition': { 'eng': 'Restricted access refers to a resource that is available in a system but with some type of restriction for full open access. This type of access can occur in a number of different situations. Some examples are described below: The user must log-in to the system in order to access the resource The user must send an email to the author or system administrator to access the resource Access to the resource is restricted to a specific community (e.g. limited to a university community).' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/QNGE-V02H', 'skos:prefLabel': { 'eng': 'metadata only access' }, 'skos:definition': { 'eng': 'Metadata only access refers to a resource in which access is limited to metadata only. The resource itself is described by the metadata, but neither is directly available through the system or platform nor can be referenced to an open access copy in an external journal or trustworthy archive.' } }
      ],
      loaded: true
    },
    'iraccessright': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/QW5R-NG4J', 'skos:prefLabel': { 'eng': 'open access' }, 'skos:definition': { 'eng': 'Access to the resource is offered without any restrictions.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/AVFC-ZZSZ', 'skos:prefLabel': { 'eng': 'embargoed access' }, 'skos:definition': { 'eng': 'The resource cannot be accessed until a given date on which it will be released for open access. A copy can be requested via e-mail.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/KC3K-CCGM', 'skos:prefLabel': { 'eng': 'restricted access' }, 'skos:definition': { 'eng': 'Access to full texts and materials is restricted to persons or groups of persons affiliated with the University of Vienna that we can specify as per your instructions. Others may request a copy via e-mail.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/QNGE-V02H', 'skos:prefLabel': { 'eng': 'metadata only access' }, 'skos:definition': { 'eng': 'Access to full texts and materials is restricted to you.' } }
      ],
      loaded: true
    },
    'versiontypes': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/TV31-080M', 'skos:notation': ['AO'], 'skos:prefLabel': { 'eng': 'author\'s original' }, 'skos:definition': { 'eng': 'Any version of a resource that is considered by the author to be of sufficient quality to be submitted for formal peer review by a second party. The author accepts full responsibility for the resource . May have a version number or date stamp. Content and layout as set out by the author.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/JTD4-R26P', 'skos:notation': ['SMUR'], 'skos:prefLabel': { 'eng': 'submitted manuscript under review' }, 'skos:definition': { 'eng': 'Any version of a resource that is under formal review managed by a socially recognized publishing entity. The entity recognizes its responsibility to provide objective expert review and feedback to the author, and, ultimately, to pass judgment on the fitness of the resource for publication with an “accept” or “reject” decision. May have a version number or date stamp. Content and layout follow publisher’s submission requirements.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/PHXV-R6B3', 'skos:notation': ['AM'], 'skos:prefLabel': { 'eng': 'accepted version' }, 'skos:definition': { 'eng': 'The version of a resource that has been accepted for publication. A second party takes permanent responsibility for the resource. Content and layout follow publisher’s submission requirements.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/83ZP-CPP2', 'skos:notation': ['P'], 'skos:prefLabel': { 'eng': 'proof' }, 'skos:definition': { 'eng': 'A version of a resource that is created as part of the publication process. This includes the copy-edited manuscript, galley proofs (i.e., a typeset version that has not been made up into pages), page proofs, and revised proofs. Some of these versions may remain essentially internal process versions, but others are commonly released from the internal environment (e.g., proofs are sent to authors) and may thus become public, even though they are not authorized to be so. Content has been changed from Accepted Manuscript; layout is the publisher’s.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/PMR8-3C8D', 'skos:notation': ['VoR'], 'skos:prefLabel': { 'eng': 'version of record (published version)' }, 'skos:definition': { 'eng': 'A fixed version of a resource that has been made available by any organization that acts as a publisher by formally and exclusively declaring the resource “published”. This includes any “early release” resource that is formally identified as being published even before the compilation of a volume issue and assignment of associated metadata, as long as it is citable via some permanent identifier(s). This does not include any “early release” resource that has not yet been “fixed” by processes that are still to be applied, such as copy-editing, proof corrections, layout, and typesetting.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/MT1G-APSB', 'skos:notation': ['CVoR'], 'skos:prefLabel': { 'eng': 'corrected version of record' }, 'skos:definition': { 'eng': 'A version of the Version of Record of a resource in which errors in the VoR have been corrected. The errors may be author errors, publisher errors, or other processing errors.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/SSQW-AP1S', 'skos:notation': ['EVoR'], 'skos:prefLabel': { 'eng': 'enhanced version of record' }, 'skos:definition': { 'eng': 'A version of the Version of Record of a resource that has been updated or enhanced by the provision of supplementary material.' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/KZB5-0F5G', 'skos:notation': ['NA'], 'skos:prefLabel': { 'eng': 'not applicable (or unknown)' }, 'skos:definition': { 'eng': 'Not Applicable (or Unknown).' } }
      ],
      loaded: true
    },
    'irfunders': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/N3C4-ZVR0', 'skos:prefLabel': { 'eng': 'Austrian Science Fund (FWF)' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/EYN2-KEW2', 'skos:prefLabel': { 'eng': 'Bundesministerium für Bildung, Wissenschaft und Forschung (BMBWF)' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/74ZM-RFR6', 'skos:prefLabel': { 'eng': 'European Science Foundation (ESF)' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/RDY6-W6C3', 'skos:prefLabel': { 'eng': 'European Union (all programmes)' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/APPY-SKP2', 'skos:prefLabel': { 'eng': 'Jubiläumsfonds der Österreichischen Nationalbank' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/TF8A-AS8X', 'skos:prefLabel': { 'eng': 'Österreichische Akademie der Wissenschaften (ÖAW)' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/RX5K-E2KX', 'skos:prefLabel': { 'eng': 'Österreichische Forschungsförderungsgesellschaft mbH (FFG)' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/RESE-5QGF', 'skos:prefLabel': { 'eng': 'Österreichische Forschungsgemeinschaft (ÖFG)' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/SN0W-4T4J', 'skos:prefLabel': { 'eng': 'Österreichischer Austauschdienst (OeAD)' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/S9R7-X1M2', 'skos:prefLabel': { 'eng': 'Österreichischer Nationalfonds für Opfer des Nationalsozialismus' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/X4EX-JK51', 'skos:prefLabel': { 'eng': 'University of Vienna' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/XMYF-893X', 'skos:prefLabel': { 'eng': 'Vienna Science and Technology Fund (WWTF)' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/6HPQ-MTZV', 'skos:prefLabel': { 'eng': 'Zukunftsfonds der Republik Österreich' } },
        { '@id': 'other', 'skos:prefLabel': { 'eng': 'Other' } }
      ],
      loaded: true
    },
    'technique': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/NZ42-TTZT', 'skos:prefLabel': { 'eng': 'black-and-white photography' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/DC1W-JWNP', 'skos:prefLabel': { 'eng': 'color photography' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/AH0S-F3BV', 'skos:prefLabel': { 'eng': 'black-and-white film' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/K818-FSM5', 'skos:prefLabel': { 'eng': 'color film' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/748F-SQW9', 'skos:prefLabel': { 'eng': 'silent film' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/1K09-VXQ4', 'skos:prefLabel': { 'eng': 'sound film' } }
      ],
      loaded: true
    },
    'material': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/CRGV-097N', 'skos:prefLabel': { 'eng': 'black marble' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/EXRJ-GCYG', 'skos:prefLabel': { 'eng': 'shampoo' } }
      ],
      loaded: true
    },
    'reproduction': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/AYRE-RQAS', 'skos:prefLabel': { 'eng': 'original' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/BD33-7WA2', 'skos:prefLabel': { 'eng': 'copy' } }
      ],
      loaded: true
    },
    'audience': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/TEPR-J4EZ', 'skos:prefLabel': { 'eng': 'FSK ab 0 freigegeben' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/7ANY-9744', 'skos:prefLabel': { 'eng': 'FSK ab 6 freigegeben' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/4DQY-TNPT', 'skos:prefLabel': { 'eng': 'FSK ab 12 freigegeben' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/HSDH-MD0J', 'skos:prefLabel': { 'eng': 'FSK ab 16 freigegeben' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/F2VP-9Z07', 'skos:prefLabel': { 'eng': 'FSK ab 18 freigegeben' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/C2TK-3DTQ', 'skos:prefLabel': { 'eng': 'Freigegeben gemäß §14 JuSchG FSK' } }
      ],
      loaded: true
    },
    'regionalencoding': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/AR9M-B9J4', 'skos:prefLabel': { 'eng': '1' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/6Z5R-XEG2', 'skos:prefLabel': { 'eng': '2' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/2YZZ-TX6M', 'skos:prefLabel': { 'eng': '3' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/36BC-K989', 'skos:prefLabel': { 'eng': '4' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/ADS3-D2RC', 'skos:prefLabel': { 'eng': '5' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/9NQT-YAJ4', 'skos:prefLabel': { 'eng': '6' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/QN10-XAKZ', 'skos:prefLabel': { 'eng': '7' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/KE1K-8NT7', 'skos:prefLabel': { 'eng': '8' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/GSVQ-6H7P', 'skos:prefLabel': { 'eng': 'A/1' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/149W-4F0N', 'skos:prefLabel': { 'eng': 'B/2' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/VHCV-2WY3', 'skos:prefLabel': { 'eng': 'C/3' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/3MQF-RDQQ', 'skos:prefLabel': { 'eng': 'region free' } }
      ],
      loaded: true
    },
    'dceformat': {
      terms: [
        { '@id': 'https://pid.phaidra.org/vocabulary/J6JG-69V6', 'skos:prefLabel': { 'eng': '3gp' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/3F67-KMTM', 'skos:prefLabel': { 'eng': 'AAC+' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/7A81-FXCX', 'skos:prefLabel': { 'eng': 'Barco Auro' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/FRJJ-4376', 'skos:prefLabel': { 'eng': 'DTS' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/EHF7-FEAP', 'skos:prefLabel': { 'eng': 'DTS 96/24' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/T5SX-Z04Y', 'skos:prefLabel': { 'eng': 'DTS Discrete 5.1' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/9FGJ-Z8DH', 'skos:prefLabel': { 'eng': 'DTS ES Discrete 6.1' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/ESQT-3YY5', 'skos:prefLabel': { 'eng': 'DTS ES Matrix 6.1' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/348K-MZZ6', 'skos:prefLabel': { 'eng': 'DTS HD' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/EN75-Q4HC', 'skos:prefLabel': { 'eng': 'DTS NEO:6' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/T7Q0-M2FS', 'skos:prefLabel': { 'eng': 'DTS++' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/28X4-0935', 'skos:prefLabel': { 'eng': 'DTS:X' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/3W6M-5MP3', 'skos:prefLabel': { 'eng': 'Datasat' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/MCQ6-HPAH', 'skos:prefLabel': { 'eng': 'Digital Surround 7.1' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/8T8J-936P', 'skos:prefLabel': { 'eng': 'Dolby Atmos' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/9SHY-VVN6', 'skos:prefLabel': { 'eng': 'Dolby Digital' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/61PF-1NEJ', 'skos:prefLabel': { 'eng': 'Dolby Digital 5.1' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/GHEV-3W1J', 'skos:prefLabel': { 'eng': 'Dolby Digital EX' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/VN51-WRAF', 'skos:prefLabel': { 'eng': 'Dolby Digital Plus' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/8RFW-88Q3', 'skos:prefLabel': { 'eng': 'Dolby Pro Logic II' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/55WB-XQ4P', 'skos:prefLabel': { 'eng': 'Dolby SR-D' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/2JPY-C523', 'skos:prefLabel': { 'eng': 'Dolby SR-D-EX' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/XZNA-QKBP', 'skos:prefLabel': { 'eng': 'Dolby Stereo' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/W56N-VX1X', 'skos:prefLabel': { 'eng': 'Dolby Surround' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/DCZS-VZ7X', 'skos:prefLabel': { 'eng': 'Dolby TrueHD' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/SDE9-JMJJ', 'skos:prefLabel': { 'eng': 'Dolby-SR' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/1DE8-XDG2', 'skos:prefLabel': { 'eng': 'MPEG-4 ALS' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/K9BD-K8GP', 'skos:prefLabel': { 'eng': 'Mono' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/2BCB-S1B5', 'skos:prefLabel': { 'eng': 'SDDS' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/7FMD-95WA', 'skos:prefLabel': { 'eng': 'Stereo' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/KCDR-Q08F', 'skos:prefLabel': { 'eng': 'Stereo 2.0' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/DBKT-3BQ3', 'skos:prefLabel': { 'eng': 'Surround 5.1' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/G1KV-MAFP', 'skos:prefLabel': { 'eng': 'VCD' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/RQK2-8156', 'skos:prefLabel': { 'eng': 'aif' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/52G8-44YX', 'skos:prefLabel': { 'eng': 'ape' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/C5G1-JQQZ', 'skos:prefLabel': { 'eng': 'asf' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/AFZ7-4AY9', 'skos:prefLabel': { 'eng': 'au' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/KF60-K40F', 'skos:prefLabel': { 'eng': 'avi' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/44YA-6HGK', 'skos:prefLabel': { 'eng': 'divx' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/GDTY-V9H4', 'skos:prefLabel': { 'eng': 'dv' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/GW3R-K19G', 'skos:prefLabel': { 'eng': 'evo' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/D3GB-MPSY', 'skos:prefLabel': { 'eng': 'fla' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/E2EJ-277K', 'skos:prefLabel': { 'eng': 'flac' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/29PG-5AKN', 'skos:prefLabel': { 'eng': 'flv' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/2CRY-PD3C', 'skos:prefLabel': { 'eng': 'ggf' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/KPT0-47XA', 'skos:prefLabel': { 'eng': 'm2ts' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/YK2W-SAFC', 'skos:prefLabel': { 'eng': 'm4a' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/S9PM-AGHF', 'skos:prefLabel': { 'eng': 'mac' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/9594-QH49', 'skos:prefLabel': { 'eng': 'mka' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/RRWW-7W5N', 'skos:prefLabel': { 'eng': 'mkv' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/15DS-TAGX', 'skos:prefLabel': { 'eng': 'mp3' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/F487-H20C', 'skos:prefLabel': { 'eng': 'mp3HD' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/AFA0-APVK', 'skos:prefLabel': { 'eng': 'mpeg' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/DT3X-PH6D', 'skos:prefLabel': { 'eng': 'mpeg-1' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/B008-MRZD', 'skos:prefLabel': { 'eng': 'mpeg-2' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/PQ4H-JT2Y', 'skos:prefLabel': { 'eng': 'mpeg-4' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/26M9-M5MR', 'skos:prefLabel': { 'eng': 'mpg' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/NZKM-SH76', 'skos:prefLabel': { 'eng': 'mts' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/T59Z-PCFE', 'skos:prefLabel': { 'eng': 'mxf' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/TR4G-6P0B', 'skos:prefLabel': { 'eng': 'ogg' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/7ZVE-WQQ2', 'skos:prefLabel': { 'eng': 'ra' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/J5QX-S86N', 'skos:prefLabel': { 'eng': 'ram' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/P66F-9ERB', 'skos:prefLabel': { 'eng': 'rm' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/BJDK-FC30', 'skos:prefLabel': { 'eng': 'snd' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/N0QE-B24V', 'skos:prefLabel': { 'eng': 'vob' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/X2ZR-7C1F', 'skos:prefLabel': { 'eng': 'voc' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/QYGZ-K8W4', 'skos:prefLabel': { 'eng': 'wav' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/6S1H-S5GF', 'skos:prefLabel': { 'eng': 'webm' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/783J-J5PD', 'skos:prefLabel': { 'eng': 'wma' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/7B2N-07A7', 'skos:prefLabel': { 'eng': 'wmv' } },
        { '@id': 'https://pid.phaidra.org/vocabulary/VTY6-58WQ', 'skos:prefLabel': { 'eng': 'xvid' } }
      ],
      loaded: true
    },
    'lang': {
      terms: [],
      sorted: { deu: [], eng: [] },
      loaded: false
    },
    'orgunits': {
      terms: [],
      tree: [],
      loaded: false
    }
  }
}

const mutations = {
  sortOrgUnits (state, locale) {
    state.vocabularies['orgunits']['terms'].sort(function (a, b) {
      return a['skos:prefLabel'][locale].localeCompare(b['skos:prefLabel'][locale], locale)
    })
  },
  setOrgUnits (state, data) {
    if (state.vocabularies['orgunits']['loaded'] === false) {
      state.vocabularies['orgunits']['tree'] = data.tree
      state.vocabularies['orgunits']['terms'] = data.terms
      state.vocabularies['orgunits']['loaded'] = true
    }
  },
  sortRoles (state, locale) {
    state.vocabularies['rolepredicate']['terms'].sort(function (a, b) {
      return a['skos:prefLabel'][locale].localeCompare(b['skos:prefLabel'][locale], locale)
    })
  },
  setLangTerms (state, data) {
    if (state.vocabularies['lang']['loaded'] === false) {
      state.vocabularies['lang']['terms'] = data
      state.vocabularies['lang']['loaded'] = true
    }
  },
  disableVocabularyTerms (state, vocandterms) {
    if (state.vocabularies[vocandterms.vocabulary]) {
      for (let t of state.vocabularies[vocandterms.vocabulary].terms) {
        for (let termid of vocandterms.termids) {
          if (t['@id'] === termid) {
            t.disabled = true
          }
        }
      }
    }
  },
  enableAllVocabularyTerms (state, vocabulary) {
    if (state.vocabularies[vocabulary]) {
      for (let t of state.vocabularies[vocabulary].terms) {
        t.disabled = false
      }
    }
  }
}

const actions = {
  loadLanguages ({ commit }, locale) {
    let langterms = languages.get_lang()
    langterms.sort((a, b) => a['skos:prefLabel'][locale].localeCompare(b['skos:prefLabel'][locale], locale))
    commit('setLangTerms', langterms)
  },
  async loadOrgUnits ({ commit, rootState }, locale) {
    try {
      let response = await axios.request({
        method: 'GET',
        url: rootState.instanceconfig.api + '/directory/org_get_units'
      })
      if (response.data.alerts && response.data.alerts.length > 0) {
        commit('setAlerts', response.data.alerts)
      }
      let terms = []
      orgunits.getOrgUnitsTerms(terms, response.data.units, null)
      commit('setOrgUnits', { tree: response.data.units, terms: terms })
      commit('sortOrgUnits', locale)
    } catch (error) {
      console.log(error)
      commit('setAlerts', [ { type: 'danger', msg: 'Failed to fetch org units: ' + error } ])
    }
  }
}

const getters = {
  getLocalizedTermLabel: (state) => (voc, id, lang) => {
    let terms = state.vocabularies[voc].terms
    for (let i = 0; i < terms.length; i++) {
      if (terms[i]['@id'] === id) {
        return terms[i]['skos:prefLabel'][lang] ? terms[i]['skos:prefLabel'][lang] : terms[i]['skos:prefLabel']['eng']
      }
    }
  },
  getTerm: (state) => (voc, id) => {
    let terms = state.vocabularies[voc].terms
    for (let i = 0; i < terms.length; i++) {
      if (terms[i]['@id'] === id) {
        return terms[i]
      }
    }
  },
  getTermProperty: (state) => (voc, id, prop) => {
    let terms = state.vocabularies[voc].terms
    for (let i = 0; i < terms.length; i++) {
      if (terms[i]['@id'] === id) {
        return terms[i][prop]
      }
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
