const fs = require('fs');

const query = `
query ($id: Int) {
  Media (id: $id, type: MANGA) {
    characters(sort: ROLE, perPage: 25) {
      edges {
        role
        node {
          id
          name {
            full
          }
          image {
            large
          }
          description
        }
      }
    }
  }
}
`;

const variables = {
  id: 144946
};

const url = 'https://graphql.anilist.co',
  options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  };

fetch(url, options)
  .then(response => response.json())
  .then(data => {
    const characters = data.data.Media.characters.edges.map(edge => {
      let desc = edge.node.description || '';
      // clean up basic markdown if needed or take the first few lines
      desc = desc.replace(/__/g, '').split('\n')[0].substring(0, 200);
      return {
        id: edge.node.id.toString(),
        name: edge.node.name.full,
        role: edge.role,
        grade: "Unknown", // Assuming grade is not provided by Anilist
        description: desc,
        image: edge.node.image.large
      };
    });
    
    fs.writeFileSync('./scraped_characters.json', JSON.stringify(characters, null, 2));
    console.log("Successfully wrote scraped_characters.json");
  })
  .catch(console.error);
