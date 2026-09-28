// export const generateEnterpriseAssignments = (enterprise) => {
//   const {
//     company_code = [],

//     sales_organization_dom = [],
//     sales_organization_exp = [],

//     distribution_channel_dom = [],
//     distribution_channel_exp = [],

//     division = [],
//     sales_office = [],
//     sales_group = [],
//     plant = [],

//     shipping_point_p1 = [],
//     shipping_point_p2 = [],
//   } = enterprise;

//   const companyCodeObj = company_code?.[0] || {};

//   const allSalesOrg = [...sales_organization_dom, ...sales_organization_exp];

//   // =====================================================
//   // 1. SALES ORG -> COMPANY CODE
//   // =====================================================

//   const salesOrgToCompanyCode = allSalesOrg.map((so) => ({
//     salesOrgCode: so.code,
//     salesOrgName: so.name,

//     companyCode: companyCodeObj.code || "",
//     companyName: companyCodeObj.name || "",
//   }));

//   // =====================================================
//   // 2. DISTRIBUTION CHANNEL -> SALES ORG
//   // =====================================================

//   const distributionChannelToSalesOrg = [
//     ...sales_organization_dom.flatMap((so) =>
//       distribution_channel_dom.map((dc) => ({
//         salesOrgCode: so.code,
//         salesOrgName: so.name,

//         dcCode: dc.code,
//         dcName: dc.name,
//       })),
//     ),

//     ...sales_organization_exp.flatMap((so) =>
//       distribution_channel_exp.map((dc) => ({
//         salesOrgCode: so.code,
//         salesOrgName: so.name,

//         dcCode: dc.code,
//         dcName: dc.name,
//       })),
//     ),
//   ];

//   // =====================================================
//   // 3. DIVISION -> SALES ORG
//   // =====================================================

//   const divisionToSalesOrg = allSalesOrg.flatMap((so) =>
//     division.map((div) => ({
//       salesOrgCode: so.code,
//       salesOrgName: so.name,

//       divisionCode: div.code,
//       divisionName: div.name,
//     })),
//   );

//   // =====================================================
//   // 4. SALES AREA
//   // =====================================================

//   const salesArea = [
//     ...sales_organization_dom.flatMap((so) =>
//       distribution_channel_dom.flatMap((dc) =>
//         division.map((div) => ({
//           salesOrgCode: so.code,
//           salesOrgName: so.name,

//           dcCode: dc.code,
//           dcName: dc.name,

//           divisionCode: div.code,
//           divisionName: div.name,
//         })),
//       ),
//     ),

//     ...sales_organization_exp.flatMap((so) =>
//       distribution_channel_exp.flatMap((dc) =>
//         division.map((div) => ({
//           salesOrgCode: so.code,
//           salesOrgName: so.name,

//           dcCode: dc.code,
//           dcName: dc.name,

//           divisionCode: div.code,
//           divisionName: div.name,
//         })),
//       ),
//     ),
//   ];

//   // =====================================================
//   // 5. SALES OFFICE -> SALES AREA
//   // =====================================================

//   const salesOfficeToSalesArea = salesArea.flatMap((area) =>
//     sales_office.map((office) => ({
//       ...area,

//       salesOfficeCode: office.code,
//       salesOfficeName: office.name,
//     })),
//   );

//   // =====================================================
//   // 6. SALES GROUP -> SALES OFFICE
//   // =====================================================

//   const salesGroupToSalesOffice = sales_office.flatMap((office) =>
//     sales_group.map((group) => ({
//       salesOfficeCode: office.code,
//       salesOfficeName: office.name,

//       salesGroupCode: group.code,
//       salesGroupName: group.name,
//     })),
//   );

//   // =====================================================
//   // 7. PLANT -> COMPANY CODE
//   // =====================================================

//   const plantToCompanyCode = plant.map((p) => ({
//     companyCode: companyCodeObj.code || "",
//     companyName: companyCodeObj.name || "",

//     plantCode: p.code,
//     plantName: p.name,
//   }));

//   // =====================================================
//   // 8. SALES ORG + DIST CHANNEL + PLANT
//   // =====================================================

//   const salesOrgDcPlant = [
//     ...sales_organization_dom.flatMap((so) =>
//       distribution_channel_dom.flatMap((dc) =>
//         plant.map((p) => ({
//           salesOrgCode: so.code,
//           salesOrgName: so.name,

//           dcCode: dc.code,
//           dcName: dc.name,

//           plantCode: p.code,
//           plantName: p.name,
//         })),
//       ),
//     ),

//     ...sales_organization_exp.flatMap((so) =>
//       distribution_channel_exp.flatMap((dc) =>
//         plant.map((p) => ({
//           salesOrgCode: so.code,
//           salesOrgName: so.name,

//           dcCode: dc.code,
//           dcName: dc.name,

//           plantCode: p.code,
//           plantName: p.name,
//         })),
//       ),
//     ),
//   ];
//   // =====================================================
//   // 9. SHIPPING POINT + PLANT
//   // =====================================================

//   const shippingPointToPlant = [
//     ...shipping_point_p1.map((sp) => ({
//       plantCode: plant?.[0]?.code || "",
//       plantName: plant?.[0]?.name || "",

//       shippingPointCode: sp.code,
//       shippingPointName: sp.name,
//     })),

//     ...shipping_point_p2.map((sp) => ({
//       plantCode: plant?.[1]?.code || "",
//       plantName: plant?.[1]?.name || "",

//       shippingPointCode: sp.code,
//       shippingPointName: sp.name,
//     })),
//   ];

//   const pricingProcedureDetermination = salesArea.map((area) => ({
//     salesOrgCode: area.salesOrgCode,

//     dcCode: area.dcCode,

//     divisionCode: area.divisionCode,

//     customerPricingProcedure: "A",

//     pricingProcedureCode: "1",

//     pricingProcedureName: "PP Name",

//     conditionType: "PR00",

//     conditionTypeName: "Price",
//   }));

//   // =====================================================
//   // 11. SHIPPING POINT DETERMINATION
//   // OVL2
//   // =====================================================

//   const shippingPointDetermination = [
//     ...shipping_point_p1.map((sp) => ({
//       shippingCondition: "01", // Standard
//       loadingGroup: "0001", // Standard Loading Group

//       plantCode: plant?.[0]?.code || "",

//       shippingPointCode: sp.code,
//       shippingPointName: sp.name,
//     })),

//     ...shipping_point_p2.map((sp) => ({
//       shippingCondition: "01",

//       loadingGroup: "0001",

//       plantCode: plant?.[1]?.code || "",

//       shippingPointCode: sp.code,
//       shippingPointName: sp.name,
//     })),
//   ];

//   const partnerDetermination = [
//     {
//       procedure: "ZPAR",
//       partnerFunction: "SP",
//       partnerName: "Sold-to Party",
//       mandatory: "✔",
//       unique: "✔",
//     },
//     {
//       procedure: "ZPAR",
//       partnerFunction: "SH",
//       partnerName: "Ship-to Party",
//       mandatory: "✔",
//       unique: "✔",
//     },
//     {
//       procedure: "ZPAR",
//       partnerFunction: "BP",
//       partnerName: "Bill-to Party",
//       mandatory: "✔",
//       unique: "✔",
//     },
//     {
//       procedure: "ZPAR",
//       partnerFunction: "PY",
//       partnerName: "Payer",
//       mandatory: "✔",
//       unique: "✔",
//     },
//   ];

//   return {
//     salesOrgToCompanyCode,
//     distributionChannelToSalesOrg,
//     divisionToSalesOrg,
//     salesArea,
//     salesOfficeToSalesArea,
//     salesGroupToSalesOffice,
//     plantToCompanyCode,
//     salesOrgDcPlant,
//     shippingPointToPlant,

//     pricingProcedureDetermination,
//     shippingPointDetermination,
//     partnerDetermination,
//   };
// };




export const generateEnterpriseAssignments = (enterprise) => {
  const {
    company_code = [],
    sales_organization_dom = [],
    sales_organization_exp = [],
    distribution_channel_dom = [],
    distribution_channel_exp = [],
    division = [],
    sales_office = [],
    sales_group = [],
    plant = [],
    shipping_point_p1 = [],
    shipping_point_p2 = [],
  } = enterprise;

  // ---------------------------------------------------------
  // Remove blank / incomplete rows from input arrays
  // ---------------------------------------------------------
  const clean = (arr) =>
    Array.isArray(arr)
      ? arr.filter(
        (item) =>
          item &&
          String(item.code || "").trim() !== "" &&
          String(item.name || "").trim() !== "",
      )
      : [];

  // ---------------------------------------------------------
  // Clean all enterprise master data
  // ---------------------------------------------------------
  const companyCodeData = clean(company_code);

  const salesOrgDom = clean(sales_organization_dom);
  const salesOrgExp = clean(sales_organization_exp);

  const dcDom = clean(distribution_channel_dom);
  const dcExp = clean(distribution_channel_exp);

  const divisionData = clean(division);
  const salesOfficeData = clean(sales_office);
  const salesGroupData = clean(sales_group);
  const plantData = clean(plant);

  const shippingPointP1 = clean(shipping_point_p1);
  const shippingPointP2 = clean(shipping_point_p2);

  // ---------------------------------------------------------
  // Company Code
  // ---------------------------------------------------------
  const companyCodeObj = companyCodeData[0] || {};

  // ---------------------------------------------------------
  // All Sales Organizations
  // ---------------------------------------------------------
  const allSalesOrg = [...salesOrgDom, ...salesOrgExp];

  // =========================================================
  // 1. Sales Org -> Company Code
  // =========================================================
  const salesOrgToCompanyCode = allSalesOrg.map((so) => ({
    salesOrgCode: so.code,
    salesOrgName: so.name,
    companyCode: companyCodeObj.code || "",
    companyName: companyCodeObj.name || "",
  }));

  // =========================================================
  // 2. Distribution Channel -> Sales Org
  // =========================================================
  const distributionChannelToSalesOrg = [
    // Domestic
    ...salesOrgDom.flatMap((so) =>
      dcDom.map((dc) => ({
        salesOrgCode: so.code,
        salesOrgName: so.name,
        dcCode: dc.code,
        dcName: dc.name,
      })),
    ),

    // Export
    ...salesOrgExp.flatMap((so) =>
      dcExp.map((dc) => ({
        salesOrgCode: so.code,
        salesOrgName: so.name,
        dcCode: dc.code,
        dcName: dc.name,
      })),
    ),
  ];

  // =========================================================
  // 3. Division -> Sales Org
  // =========================================================
  const divisionToSalesOrg = allSalesOrg.flatMap((so) =>
    divisionData.map((div) => ({
      salesOrgCode: so.code,
      salesOrgName: so.name,
      divisionCode: div.code,
      divisionName: div.name,
    })),
  );

  // =========================================================
  // 4. Sales Area
  // =========================================================
  const salesArea = [
    // Domestic Sales Area
    ...salesOrgDom.flatMap((so) =>
      dcDom.flatMap((dc) =>
        divisionData.map((div) => ({
          salesOrgCode: so.code,
          salesOrgName: so.name,
          dcCode: dc.code,
          dcName: dc.name,
          divisionCode: div.code,
          divisionName: div.name,
        })),
      ),
    ),

    // Export Sales Area
    ...salesOrgExp.flatMap((so) =>
      dcExp.flatMap((dc) =>
        divisionData.map((div) => ({
          salesOrgCode: so.code,
          salesOrgName: so.name,
          dcCode: dc.code,
          dcName: dc.name,
          divisionCode: div.code,
          divisionName: div.name,
        })),
      ),
    ),
  ];

  // =========================================================
  // 5. Sales Office -> Sales Area
  // =========================================================
  const salesOfficeToSalesArea = salesArea.flatMap((area) =>
    salesOfficeData.map((office) => ({
      ...area,
      salesOfficeCode: office.code,
      salesOfficeName: office.name,
    })),
  );

  // =========================================================
  // 6. Sales Group -> Sales Office
  // =========================================================
  const salesGroupToSalesOffice = salesOfficeData.flatMap((office) =>
    salesGroupData.map((group) => ({
      salesOfficeCode: office.code,
      salesOfficeName: office.name,
      salesGroupCode: group.code,
      salesGroupName: group.name,
    })),
  );

  // =========================================================
  // 7. Plant -> Company Code
  // =========================================================
  const plantToCompanyCode = plantData.map((p) => ({
    companyCode: companyCodeObj.code || "",
    companyName: companyCodeObj.name || "",
    plantCode: p.code,
    plantName: p.name,
  }));

  // =========================================================
  // 8. Sales Org + Distribution Channel + Plant
  // =========================================================
  const salesOrgDcPlant = [
    // Domestic
    ...salesOrgDom.flatMap((so) =>
      dcDom.flatMap((dc) =>
        plantData.map((p) => ({
          salesOrgCode: so.code,
          salesOrgName: so.name,
          dcCode: dc.code,
          dcName: dc.name,
          plantCode: p.code,
          plantName: p.name,
        })),
      ),
    ),

    // Export
    ...salesOrgExp.flatMap((so) =>
      dcExp.flatMap((dc) =>
        plantData.map((p) => ({
          salesOrgCode: so.code,
          salesOrgName: so.name,
          dcCode: dc.code,
          dcName: dc.name,
          plantCode: p.code,
          plantName: p.name,
        })),
      ),
    ),
  ];

  // =========================================================
  // 9. Shipping Point -> Plant
  // =========================================================
  const shippingPointToPlant = [
    // Plant 1 / Shipping Point P1
    ...shippingPointP1.map((sp) => ({
      plantCode: plantData?.[0]?.code || "",
      plantName: plantData?.[0]?.name || "",
      shippingPointCode: sp.code,
      shippingPointName: sp.name,
    })),

    // Plant 2 / Shipping Point P2
    ...shippingPointP2.map((sp) => ({
      plantCode: plantData?.[1]?.code || "",
      plantName: plantData?.[1]?.name || "",
      shippingPointCode: sp.code,
      shippingPointName: sp.name,
    })),
  ];

  // =========================================================
  // 10. Pricing Procedure Determination
  // =========================================================
  const pricingProcedureDetermination = salesArea.map((area) => ({
    salesOrgCode: area.salesOrgCode,
    dcCode: area.dcCode,
    divisionCode: area.divisionCode,
    customerPricingProcedure: "A",
    pricingProcedureCode: "1",
    pricingProcedureName: "PP Name",
    conditionType: "PR00",
    conditionTypeName: "Price",
  }));

  // =========================================================
  // 11. Shipping Point Determination - OVL2
  // =========================================================
  const shippingPointDetermination = [
    // Plant 1 / Shipping Point P1
    ...shippingPointP1.map((sp) => ({
      shippingCondition: "01",
      loadingGroup: "0001",
      plantCode: plantData?.[0]?.code || "",
      shippingPointCode: sp.code,
      shippingPointName: sp.name,
    })),

    // Plant 2 / Shipping Point P2
    ...shippingPointP2.map((sp) => ({
      shippingCondition: "01",
      loadingGroup: "0001",
      plantCode: plantData?.[1]?.code || "",
      shippingPointCode: sp.code,
      shippingPointName: sp.name,
    })),
  ];

  // =========================================================
  // 12. Partner Determination
  // =========================================================
  const partnerDetermination = [
    {
      procedure: "ZPAR",
      partnerFunction: "SP",
      partnerName: "Sold-to Party",
      mandatory: "✔",
      unique: "✔",
    },
    {
      procedure: "ZPAR",
      partnerFunction: "SH",
      partnerName: "Ship-to Party",
      mandatory: "✔",
      unique: "✔",
    },
    {
      procedure: "ZPAR",
      partnerFunction: "BP",
      partnerName: "Bill-to Party",
      mandatory: "✔",
      unique: "✔",
    },
    {
      procedure: "ZPAR",
      partnerFunction: "PY",
      partnerName: "Payer",
      mandatory: "✔",
      unique: "✔",
    },
  ];

  // =========================================================
  // Return all generated assignments
  // =========================================================
  return {
    salesOrgToCompanyCode,
    distributionChannelToSalesOrg,
    divisionToSalesOrg,
    salesArea,
    salesOfficeToSalesArea,
    salesGroupToSalesOffice,
    plantToCompanyCode,
    salesOrgDcPlant,
    shippingPointToPlant,
    pricingProcedureDetermination,
    shippingPointDetermination,
    partnerDetermination,
  };
};