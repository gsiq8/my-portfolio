import type { Project } from "@/data/types";

export const waterQualityEtl: Project = {
  slug: "water-quality-etl",
  title: {
    pt: "Qualidade de Água do Brasil",
    en: "Tap Water Quality in Brazil",
  },
  description: {
    pt: "Do ETL à Análise",
    en: "From ETL to Analysis",
  },
  thumbnail: "/images/portfolio/data/water-quality-etl.png",
  gallery: "/images/portfolio/data/water-quality-etl-gallery.png",
  date: "2026-08-23",
  tags: ["ETL", "Python", "SQL", "Docker", "Airflow", "DAG", "Data Studio"],
  links: [{ label: "Github", href: "https://github.com/gsiq8/water-quality-etl" }],
  body: [
    {
      type: "heading",
      text: { en: "Overview", pt: "Visão Geral" },
    },
    {
      type: "paragraph",
      text: {
        en: "I rebuilt a real-world water quality data pipeline from the ground up. It now pulls, cleans, and serves 2.3M+ records straight from Brazil's open government water-quality API (SISAGUA), fully automated and running on free-tier infrastructure. The output is a live dashboard, embedded below, plus the same email report tool the project started as: drop in a Brazilian zip code and get back what's actually in the local tap water.",
        pt: "Reconstruí do zero um pipeline de dados real sobre qualidade da água. Hoje ele puxa, limpa e disponibiliza mais de 2,3 milhões de registros direto da API de dados abertos de qualidade da água do governo brasileiro (SISAGUA), de forma totalmente automatizada e rodando em infraestrutura de camada gratuita. O resultado é um dashboard ao vivo, incorporado abaixo, além da mesma ferramenta de relatório por email com que o projeto começou: informe um CEP brasileiro e receba o que realmente tem na água da torneira daquele local.",
      },
    },
    {
      type: "heading",
      text: { en: "Architecture", pt: "Arquitetura" },
    },
    {
      type: "paragraph",
      text: {
        en: "Raw records come in through SISAGUA's open-data API, get cleaned and transformed in Python, and land in a PostgreSQL database. Rather than storing the API response as-is, I designed the schema around the questions the BI layer actually needs to answer — not a raw dump. Airflow orchestrates the whole pipeline on a schedule, running fully containerized in Docker, with separate paths for incremental loads (day-to-day updates) and full historical loads (rebuilding from scratch); the same containers produce the same result whether the pipeline is processing a small update or rebuilding the full historical dataset. Data-quality validation runs automatically before anything reaches the dashboard, and Looker Studio reads straight from Postgres for the dashboard below.",
        pt: "Os registros brutos chegam pela API de dados abertos do SISAGUA, são limpos e transformados em Python, e armazenados em um banco PostgreSQL. Em vez de guardar a resposta da API como ela vem, desenhei o schema em torno das perguntas que a camada de BI realmente precisa responder — não um despejo bruto de dados. O Airflow orquestra todo o pipeline de forma agendada, rodando totalmente containerizado em Docker, com caminhos separados para cargas incrementais (atualizações do dia a dia) e cargas históricas completas (reconstrução do zero); os mesmos containers produzem o mesmo resultado tanto processando uma atualização pequena quanto reconstruindo o histórico completo. A validação de qualidade dos dados roda automaticamente antes que qualquer coisa chegue ao dashboard, e o Looker Studio lê direto do Postgres para o dashboard abaixo.",
      },
    },
    {
      type: "embed",
      url: "https://datastudio.google.com/embed/reporting/9566a935-9d1d-4989-a18b-c06326769e8c/page/yp86F",
      title: "Water Quality Dashboard",
    },
    {
      type: "heading",
      text: { en: "Engineering Challenges", pt: "Desafios de Engenharia" },
    },
    {
      type: "paragraph",
      text: {
        en: "SISAGUA's API has five documented endpoints that looked like they covered everything I needed. I built against all five, then noticed one — the one that was supposed to carry metals and pesticide readings — was returning the same single microbiological parameter over and over, hundreds of thousands of records in. Going back to the full API spec instead of the five endpoints I'd been pointed to, I found a different one entirely: a semester-based endpoint that actually had the metals, pesticides, and organic compound data, with the safety threshold for each parameter built right into the record.",
        pt: "A API do SISAGUA tem cinco endpoints documentados que pareciam cobrir tudo que eu precisava. Construí em cima dos cinco, e só depois percebi que um deles — o que deveria trazer leituras de metais e agrotóxicos — estava retornando sempre o mesmo único parâmetro microbiológico, centenas de milhares de registros depois. Voltando para a especificação completa da API em vez de me limitar aos cinco endpoints que eu tinha mapeado, encontrei um totalmente diferente: um endpoint semestral que de fato tinha os dados de metais, agrotóxicos e compostos orgânicos, com o limite de segurança de cada parâmetro já embutido no registro.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: 'That safety threshold — VMP, the maximum allowed value per parameter — turned into the most interesting engineering decision in the project. My first instinct was to hardcode Brazil\'s official potability limits. Then I found the limits themselves change over time as the regulation gets revised — a threshold pulled from 2022 data was already outdated by 2024. So instead of hardcoding anything, the pipeline models the threshold as time-dependent: each water sample is validated against the VMP that was actually in effect on the date it was collected. It\'s a small design choice, but it\'s the difference between data that looks right and data that is right.',
        pt: 'Esse limite de segurança — o VMP, o valor máximo permitido por parâmetro — virou a decisão de engenharia mais interessante do projeto. Meu primeiro instinto foi fixar no código os limites oficiais de potabilidade do Brasil. Só que descobri que esses limites mudam ao longo do tempo, conforme a regulamentação é revisada — um valor pego de dados de 2022 já estava desatualizado em 2024. Então, em vez de fixar qualquer coisa no código, o pipeline modela o limite como algo dependente do tempo: cada amostra de água é validada contra o VMP que estava de fato em vigor na data em que foi coletada. É uma escolha pequena de design, mas é a diferença entre dados que parecem certos e dados que estão certos.',
      },
    },
    {
      type: "paragraph",
      text: {
        en: "The rest of the build was the usual pile of infrastructure issues that don't show up until you run things end to end: a newer major version of Airflow deprecated part of the API my existing DAGs were built against, so upgrading meant rewriting the affected task definitions; Docker's default networking couldn't reach Supabase's direct connection at all because it's IPv6-only, fixed by switching to Supabase's connection pooler; and a couple of unpinned dependencies in an old requirements file broke cleanly in a fresh container despite having worked fine in a stale local environment for years. None of these are exotic problems — they're the kind of thing you only catch by actually deploying, not by reading the code and assuming it's fine.",
        pt: "O resto da construção foi a pilha usual de problemas de infraestrutura que só aparecem quando você roda tudo de ponta a ponta de verdade: uma versão major mais nova do Airflow depreciou parte da API sobre a qual minhas DAGs existentes tinham sido construídas, então atualizar significou reescrever as tasks afetadas; a rede padrão do Docker não conseguia alcançar a conexão direta do Supabase de jeito nenhum porque ela é só IPv6, resolvido trocando para o pooler de conexão do Supabase; e algumas dependências sem versão fixada em um requirements antigo quebraram na hora em um container novo, mesmo tendo funcionado bem em um ambiente local desatualizado por anos. Nenhum desses é um problema exótico — são o tipo de coisa que só aparece quando você realmente faz o deploy, não quando você lê o código e assume que está tudo bem.",
      },
    },
    {
      type: "heading",
      text: { en: "What Changed Since 2023", pt: "O Que Mudou Desde 2023" },
    },
    {
      type: "paragraph",
      text: {
        en: "This isn't a new idea. Back in 2023 I built a version of this for an e-commerce client: pull a customer's zip code, look up local tap water quality, send them a report. It worked, but SISAGUA didn't have a public API yet, so it ran on manually-wrangled bulk CSV exports — heavier and more expensive to operate than it needed to be. Revisiting it now wasn't about redoing the same thing; it was about rebuilding the underlying data architecture properly, now that a real API exists: automated ingestion instead of manual CSVs, a schema and validation layer instead of ad hoc cleaning, and a live dashboard instead of email-only output. The email report is still part of the project — it's below — but the platform behind it is a different piece of engineering entirely.",
        pt: "Essa não é uma ideia nova. Em 2023, construí uma versão disso para um cliente de e-commerce: pegar o CEP do cliente, buscar a qualidade da água da torneira na região dele, enviar um relatório. Funcionava, mas o SISAGUA ainda não tinha uma API pública, então rodava em cima de exportações de CSV em lote trabalhadas manualmente — mais pesado e mais caro de operar do que precisava ser. Revisitar o projeto agora não foi sobre refazer a mesma coisa; foi sobre reconstruir a arquitetura de dados por trás dele de forma correta, agora que existe uma API de verdade: ingestão automatizada em vez de CSVs manuais, um schema e uma camada de validação em vez de limpeza ad hoc, e um dashboard ao vivo em vez de uma saída só por email. O relatório por email ainda faz parte do projeto — está logo abaixo — mas a plataforma por trás dele é um trabalho de engenharia completamente diferente.",
      },
    },
    {
      type: "heading",
      text: { en: "Try It Yourself", pt: "Experimente Você Mesmo" },
    },
    {
      type: "paragraph",
      text: {
        en: "Want to see the pipeline in action? Drop your email and a Brazilian zip code below to receive a full water-quality report for that location — the same report the original 2023 version sent, now running on this rebuilt platform. (And if you read a data pipeline write-up all the way to the bottom: respect.)",
        pt: "Quer ver o pipeline em ação? Deixe seu email e um CEP brasileiro abaixo para receber um relatório completo de qualidade da água daquele local — o mesmo relatório que a versão original de 2023 enviava, agora rodando nessa plataforma reconstruída. (E se você leu um texto sobre pipeline de dados até o final: respeito.)",
      },
    },
    {
      type: "klaviyo-form",
      formId: "RejCPY",
    },
  ],
};
