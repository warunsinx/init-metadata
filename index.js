const fs = require("fs");
const dir = `${__dirname}/metadata/`;
const n = 1;

for (let id = 1; id <= n; id++) {
  const data = {
    name: `...${id}`,
    description: "...",
    image: `https://.../${id}.jpg`,
    external_url: `https://...${id}.jpg`,
  };

  fs.writeFileSync(`${dir}/${id}.json`, JSON.stringify(data, null, 2));
}
