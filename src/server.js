const express = require("express");
const { default: AdminBro } = require("admin-bro");
const companyOptions = require("./resource/company.resource");
const userOptions = require("./resource/user.resource");
const buildAdminRouter = require("../src/admin.router");
const mongoose = require("mongoose");
const { Company } = require("./entities/company.entity");
const { User } = require("./entities/user.entity");
const app = express();
const PORT = 3010;

const run = async () => {
  const mongoose = require("mongoose");
  await mongoose.connect("mongodb://IPOFSERVER/apec", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const admin = new AdminBro({
    assets: {
      scripts: ["https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",
      "sly.js"
  
    ],
      styles: ["https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
      "sly.css",
    ],
    },
    branding: {
      companyName: 'PNG-SME',
    },
    resources: [
      {resource: User},
      {
      resource: Company,
      options:{
        properties: {
          map: {
            components: {
              show: 
              AdminBro.bundle('./components/map'),
            },
          },
        }

      } //options
    }
  ],//resources

  });

  const router = buildAdminRouter(admin);
  app.use(admin.options.rootPath, router);
  app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
  });
};

module.exports = run;
