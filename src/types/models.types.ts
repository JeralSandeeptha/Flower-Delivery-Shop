export type Flower = {
  metadata: {
    tags: any[];
    concepts: any[];
  };
  sys: {
    space: {
      sys: {
        type: "Link";
        linkType: "Space";
        id: string;
      };
    };
    id: string;
    type: "Entry";
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: "Link";
        linkType: "Environment";
      };
    };
    publishedVersion: number;
    revision: number;
    contentType: {
      sys: {
        type: "Link";
        linkType: "ContentType";
        id: string;
      };
    };
    locale: string;
  };
  fields: {
    image: {
      metadata: {
        tags: any[];
        concepts: any[];
      };
      sys: {
        space: {
          sys: {
            type: "Link";
            linkType: "Space";
            id: string;
          };
        };
        id: string;
        type: "Asset";
        createdAt: string;
        updatedAt: string;
        environment: {
          sys: {
            id: string;
            type: "Link";
            linkType: "Environment";
          };
        };
        publishedVersion: number;
        revision: number;
        locale: string;
      };
      fields: {
        title: string;
        description: string;
        file: {
          url: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
          fileName: string;
          contentType: string;
        };
      };
    };
    name: string;
    price: number;
    description: {
      data: {};
      content: {
        data: {};
        content: {
          data: {};
          marks: any[];
          value: string;
          nodeType: "text";
        }[];
        nodeType: "paragraph";
      }[];
      nodeType: "document";
    };
    availability: boolean;
    vaseAvailability: boolean;
    category: {
      metadata: {
        tags: any[];
        concepts: any[];
      };
      sys: {
        space: {
          sys: {
            type: "Link";
            linkType: "Space";
            id: string;
          };
        };
        id: string;
        type: "Entry";
        createdAt: string;
        updatedAt: string;
        environment: {
          sys: {
            id: string;
            type: "Link";
            linkType: "Environment";
          };
        };
        publishedVersion: number;
        revision: number;
        contentType: {
          sys: {
            type: "Link";
            linkType: "ContentType";
            id: string;
          };
        };
        locale: string;
      };
      fields: {
        name: string;
      };
    };
    tags: string[];
  };
};

// export type Flower = {
//     id: string,
//     image: string,
//     name: string | null,
//     price: number | null,
//     description: string,
//     category: string,
//     availability: boolean,
//     vaseAvailability: boolean,
//     tags: string[] | [],
//     createdAt: string,
//     updatedAt: string,
// }