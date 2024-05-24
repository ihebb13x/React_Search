import { useState } from 'react';
import { users } from './data'; // Importation des données d'utilisateurs

function App() {
  const [search, setSearch] = useState(""); // État pour stocker la valeur de recherche

  // Fonction de gestion du changement de valeur de recherche
  const handleChange = e => {
    setSearch(e.target.value);
  };

  let filteredUsers = [];

  // Filtrage des utilisateurs en fonction de la recherche
  if (search !== "") {
    filteredUsers = users.filter(item => item.first_name.toLowerCase().includes(search.toLowerCase()));
  } else {
    filteredUsers = users;
  }

  return (
    <div className="px-28">
      {/* Titre de l'application */}
      <h1 className="display-4 text-center my-4 text-2xl font-semibold text-purple-800">
        React Search Filter
      </h1>
      {/* Champ de recherche */}
      <div>
        <label htmlFor="search" className="sr-only">
          Email
        </label>
        <input
          type="text"
          name="search"
          id="search"
          onChange={handleChange}
          className="block w-full rounded-md border border-purple-400 px-3 py-3 outline-none shadow-sm sm:text-sm focus:ring-purple-500 focus:border-purple-500"
          placeholder="Search contact by name"
        />
      </div>
      {/* Tableau des utilisateurs */}
      <div>
        <div className="mt-8 flex flex-col">
          <div className="inline-block w-full py-2">
            <div className="overflow-hidden shadow-md bg-white rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                {/* En-tête du tableau */}
                <thead className="bg-purple-200">
                  <tr>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-purple-800">
                      First Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-purple-800">
                      Last Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-purple-800">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-purple-800">
                      Country
                    </th>
                  </tr>
                </thead>
                {/* Corps du tableau */}
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.map(item => (
                    <tr key={item.id}>
                      {/* Affichage des détails de l'utilisateur */}
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 font-mono">{item.first_name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 font-mono">{item.last_name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 font-mono">{item.email}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 font-mono">{item.Country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
