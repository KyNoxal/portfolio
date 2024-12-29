import Card from "@/components/card";
import Header from "@/components/header";
import BackButton from "@/components/return-button";

export default function Accueil() {
    return (
        <main className="mb-4 bg-wheat w-full justify-center min-h-screen">
            <Header />
            <BackButton />
            <Card
                upperText="De 2024 à 2025"
                title="Alternance à Gustave Roussy (Villejuif)"
                nodes={
                    <ul className="list-disc ml-4">
                        <li>Gestion de projet du système d’information décisionnel (SID)
                            <ul className="list-disc ml-4">
                                <li>Analyse des besoins</li>
                                <li>Rédaction des spécifications techniques</li>
                                <li>Développement des intégrations de données</li>
                                <li>Recette unitaire</li>
                                <li>Réalisation de rapports structurés et de tableaux de bord.</li>
                            </ul>
                        </li>
                        <li>Maintien en condition opérationnel du SID</li>
                    </ul>
                }
            />
            <Card
                upperText="De Janvier 2024 à Mars 2024"
                title="Stage en développement logiciel à Apyclic (Nevers)"
                nodes={
                    <ul className="list-disc ml-4">
                        <li>Développement de nouveaux outils de gestion et de statistiques
                            <ul className="list-disc ml-4">
                                <li>Gestion des pièces électroniques via leur numéro de série</li>
                                <li>Analyse de la fréquentation de leur point de vente.</li>
                                <li>Ces logiciels comprennent :
                                    <ul className="list-disc ml-4">
                                        <li>Une interface utilisateur</li>
                                        <li>Une base de données déployé sur le réseau de l’entreprise</li>
                                    </ul>
                                </li>
                                <li>Langages utilisés :
                                    <ul className="list-disc ml-4">
                                        <li>C#</li>
                                        <li>XAML</li>
                                        <li>MySQL</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                }
            />
            <Card
                upperText="De Juillet 2024 à Août 2024, de juillet 2023 à Août 2023, de juillet 2022 à Août 2022"
                title="Jobs d'été"
                nodes={
                    <ul className="list-disc ml-4">
                        <li>Employé commerciale dans une chaîne de magasin agroalimentaire (Leclerc)
                            <ul className="list-disc ml-4">
                                <li>Remplacement de personnels</li>
                                <li>Maintiens Depuis rayons frais</li>
                            </ul>
                        </li>
                    </ul>
                }
            />
            <Card
                upperText="De Juillet 2018 à Août 2018"
                title="Job d'été"
                nodes={
                    <ul className="list-disc ml-4">
                        <li>Ouvrier sur machine dans une coopérative agricole local.
                            <ul className="list-disc ml-4">
                                <li>Renforcement des équipes</li>
                            </ul>
                        </li>
                    </ul>
                }
            />
        </main>

    )
};