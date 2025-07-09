import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Images */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src="/images/classroom.jpg" // remplace par le vrai chemin
            alt="Salle de classe"
            className="w-64 h-auto rounded-2xl shadow-md"
          />
          <img
            src="/images/students.jpg" // remplace par le vrai chemin
            alt="Groupe d'étudiants"
            className="w-64 h-auto rounded-2xl shadow-md"
          />
        </div>

        {/* Texte */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-blue-900">À propos de nous</h2>

          {/* Bloc 1 */}
          <div className="flex items-start gap-4">
            <div className="text-yellow-500 text-3xl">🎓</div>
            <div>
              <h3 className="font-semibold text-lg text-blue-900">+3ans</h3>
              <p className="text-gray-700">
                Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts,
                de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.
              </p>
            </div>
          </div>

          {/* Bloc 2 */}
          <div className="flex items-start gap-4">
            <div className="text-yellow-500 text-3xl">👥</div>
            <div>
              <h3 className="font-semibold text-lg text-blue-900">+250 étudiants</h3>
              <p className="text-gray-700">
                Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État
                malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.
              </p>
            </div>
          </div>

          {/* Bloc 3 */}
          <div className="flex items-start gap-4">
            <div className="text-yellow-500 text-3xl">🏅</div>
            <div>
              <h3 className="font-semibold text-lg text-blue-900">Notre mission</h3>
              <p className="text-gray-700">
                Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle,
                la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
