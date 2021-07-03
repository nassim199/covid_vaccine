<template>
<div>
  <v-img
      :src="require('../assets/faq sans vide-8.png')"
      class="my-3"
      contain
    /> 
 <v-container>
       <v-expansion-panels>
          <v-expansion-panel
            v-for="(q,i) in questions"
            :key="i"
          >
            <v-expansion-panel-header>
              {{ q.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ q.reponse }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
 </v-container>
</div>
</template>

<script>

  export default {
    name: 'Faq',
    data() {
      return {
        questions: [
          {
            question: "Comment fonctionnent les vaccins?",
            reponse: "Les vaccins stimulent les réponses immunitaires protectrices du corps humain de sorte que, si une personne est infectée par un agent pathogène, le système immunitaire peut rapidement empêcher l'infection de se propager dans le corps et de provoquer des maladies. De cette manière, les vaccins imitent une infection naturelle mais sans pour autant provoquer la maladie.\nToutes les personnes infectées par le SRAS-CoV-2 ne développent pas de maladie (Covid-19 est la maladie causée par le virus SARS-CoV-2). Ces personnes ont une infection asymptomatique mais peuvent toujours transmettre le virus à d'autres. La plupart des vaccins n'empêchent pas complètement l'infection, mais empêchent l'infection de se propager dans le corps et de provoquer des maladies. De nombreux vaccins peuvent également empêcher la transmission, conduisant potentiellement à la protection collective grâce à laquelle les personnes non vaccinées sont protégées de l'infection par les personnes vaccinées qui les entourent, car elles ont moins de risque d'être exposées au virus."
          },
          {
            question: "Comment savoir si le vaccin contre le virus de la Covid-19 est sur?",
            reponse: "A l’instar des autres vaccins, les vaccins développés pour lutter contre le virus de la COVID-19 doivent subir des tests approfondis et rigoureux avant leur introduction dans un pays. Une fois utilisés, ils seront surveillés en permanence pour s'assurer qu'ils sont sans danger pour les personnes qui les reçoivent.\nIl existe de nombreux mécanismes de protection solides pour assurer l’innocuité des vaccins contre le virus de la COVID-19. Ces essais, auxquels prennent part des personnes en bonne santé ou ayant une pathologie équilibrée, sont spécialement conçus pour repérer tout effet indésirable courant ou d’autres problèmes d’innocuité.\nSi un essai clinique montre qu’un vaccin contre le virus de la COVID-19 est sûr et efficace, une série d’examens sur l’efficacité et l’innocuité doit être menée, y compris l’examen et l’approbation réglementaire dans le pays où le vaccin est fabriqué"
          },
          {
            question: "Pourquoi le processus de développement et de la production des vaccins contre le virus de la Covid-19 ont été rapides?",
            reponse: "Traditionnellement, il faut de nombreuses années pour mettre au point un vaccin, confirmer son innocuité et son efficacité et le produire en quantités suffisantes pour un usage public. Ce délai a été considérablement raccourci pour les vaccins contre le SRAS-CoV-2. Cela a été rendu possible de plusieurs manières :\n- Certains essais cliniques ont combiné les phases 1 et 2 pour évaluer la sécurité et les réponses immunitaires.\n- En raison du nombre élevé de nouveaux cas de COVID-19, des études multicentriques dans plusieurs pays ont permis de comparer la différence entre ceux qui ont reçu le vaccin et ceux qui ont reçu le placebo.\n- Les gouvernements ont fortement investi dans le renforcement de la recherche-développement ainsi que les capacités de production d’un grand nombre de doses avant que les résultats des essais de phase 3 ne soient disponibles. Aucun de ces facteurs qui contribuent au développement accéléré d'un vaccin contre le SRAS-CoV-2 ne laissent déduire que la sécurité, l'intégrité scientifique ou éthique ont été compromises ou que des raccourcis ont été faits.\n- Les plateformes de production vaccinales existaient déjà avec d’autres vaccins et sont actuellement utilisées pour ces vaccins"
          },
          {
            question: "Qui approuve les vaccins contre la Covid-19 en Algérie?",
            reponse: "Dans les pays où les vaccins contre le virus de la COVID-19 sont fabriqués, des investigateurs nationaux supervisent les différentes étapes de développement du vaccin en s’appuyant sur des normes internationales rigoureuses en matière de pratique clinique et d’éthique.\nEn Algérie, l’autorité sanitaire (Direction des Médicaments et de la Pharmacie), selon la réglementation en vigueur, est chargée d’approuver l’utilisation de tout nouveau médicament ou vaccin."
          },
          {
            question: "La vaccination permettra-t-elle d'empecher de contracter la Covid-19?",
            reponse: "Les vaccins contre le virus de la COVID-19 sont soigneusement évalués dans des essais cliniques et ne seront autorisés ou approuvés que s’ils sont efficaces.\nSur la base des données disponibles, on estime que le fait de se faire vacciner contre le virus de la COVID-19 peut aider à ne pas tomber gravement malade même en cas d’infection par le virus.\nSe faire vacciner peut également protéger les proches en particulier les personnes à risque accru de complication grave due à la COVID-19.\nLes recherches continuent à étudier l'effet de la vaccination contre le virus de COVID-19, sur sa capacité à empêcher les gens de propager le virus ainsi que la durée de la protection. Toutefois, le risque de maladie grave et de décès dus à la COVID-19 l'emporte de loin sur les avantages de l'immunité naturelle."
          },
          {
            question: "Si j'ai déja eu la Covid-19 et que j'ai guéri, dois-je encore me faire vacciner avec un vaccin Covid-19?",
            reponse: "Actuellement, et en pratique, il n'y a pas suffisamment de données pour déterminer comment une infection antérieure par COVID-19 affecte l'efficacité du vaccin. On sait que l'immunité naturelle contre le virus diminue avec le temps, donc actuellement, les personnes qui ont déjà été infectées, sont éligibles à recevoir le vaccin"
          },
          {
            question: "Est-ce-que les vaccins contre le virus de la Covid-19 utilisés en Algérie sont surs?",
            reponse: "Les données sur les vaccins sont réconfortantes. Les essais réalisés n'ont pas suscité de préoccupations en matière de sécurité, bien que de rares effets indésirables, bénins à modérés (douleurs au site d’injection, réaction cutanée, maux de tête, une légère fébricule) ont été notifiés chez quelques participants aux essais cliniques en algérie. Les résultats de ces derniers ont confirmé que ces effets indésirables étaient transitoires, comparables à d’autres vaccins de même type et qu’aucun événement indésirable grave n'a été signalé."
          },
          {
            question: "Si j'ai une allergie, devrais-je éviter de me faire vacciner contre le SARS-Cov-2?",
            reponse: "Les allergies saisonnières et alimentaires ne représentent pas des contres indications à la vaccination contre le virus de la Covid -19 Les personnes qui ont eu des réactions antérieures graves, comme l'anaphylaxie, à des médicaments ou à des vaccins ne devraient pas recevoir le vaccin contre le virus de la COVID-19.\nIl est à noter qu’une 2ème dose ne doit pas être administrée à toute personne ayant présenté une anaphylaxie après l'administration de la première dose de ce vaccin"
          },
           {
            question: "Entre les deux doses, quelles mesures doivent-elles etre prises par le sujet vacciné?",
            reponse: "Lorsqu’une personne reçoit la première dose du vaccin contre le virus de la Covid-19, elle observe l’éventualité d’apparition d’effets indésirables, notamment :\n- Réactions locales (douleur, tuméfaction ou rougeur au site d'injection) ;    \n- Réactions systémiques (fièvre, petit malaise, douleur musculaire, maux de tête, douleur articulaire …)."
          },
           {
            question: "Est- ce que les maladies chroniques tels que le diabète, l’hypertension artérielle, les cardiopathies, les cancers, HIV ….sont une contre-indication à la vaccination anti COVID-19 ?",
            reponse: "NON, les personnes ayant des maladies chroniques tel qu’un diabète, une hypertension artérielle, des cardiopathies, HIV, cancers, des troubles de la coagulation du sang, sous chimiothérapie … peuvent recevoir le vaccin anti COVID-19. Les seules contre-indications actuellement retenus pour les vaccins sont :\n- Absolues :\nGrossesse et allaitement.\nAntécédent de réaction allergique systémique grave (choc anaphylactique ou œdème de Quincke).\nAntécédent de réaction allergique à une dose précédente de ce vaccin.\n- Temporaires : c a d ils peuvent se vacciner après. Cas de :\nMaladies infectieuses en phase aigüe.\nLes personnes présentant une infection Covid-19 symptomatique ne doivent pas recevoir le vaccin jusqu’à rétablissement clinique et 4 semaines après le début des signes cliniques. Pour les cas asymptomatiques un délai de 4 semaines est requis après la date de diagnostic."
          },
           {
            question: "Est-il possible de contracter la Covid-19 suite à la vaccination contre le virus de la Covid-19?",
            reponse: "Non, il n'est pas possible d'obtenir la COVID-19 suite à la vaccination. Les vaccins contre le SRAS-CoV-2 utilisent un virus qui ne donne pas la maladie , des parties du virus ou un gène du virus. Aucun de ceux-ci ne peut provoquer la COVID-19."
          },
           {
            question: "Au bout de combien de temps les vaccins contre la COVID-19 pourraient-ils mettre fin à la pandémie ?",
            reponse: "A l’heure actuelle, il serait difficile de déterminer le temps nécessaire pour mettre fin à la pandémie en Algérie, et ce, même après l’opération de vaccination contre la COVID-19."
          },
           {
            question: "Pourquoi est-ce nécessaire de vacciner plus de 70% de la population?",
            reponse: "Se faire vacciner est un moyen de se protéger et également de protéger son entourage. Cependant, l’immunité collective ne serait possible que si la majorité des personnes se sont vaccinées."
          },
        ]
      }
    }
  }
</script>