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

  const companyCodeObj = company_code?.[0] || {};

  const allSalesOrg = [...sales_organization_dom, ...sales_organization_exp];

  // =====================================================
  // 1. SALES ORG -> COMPANY CODE
  // =====================================================

  const salesOrgToCompanyCode = allSalesOrg.map((so) => ({
    salesOrgCode: so.code,
    salesOrgName: so.name,

    companyCode: companyCodeObj.code || "",
    companyName: companyCodeObj.name || "",
  }));

  // =====================================================
  // 2. DISTRIBUTION CHANNEL -> SALES ORG
  // =====================================================

  const distributionChannelToSalesOrg = [
    ...sales_organization_dom.flatMap((so) =>
      distribution_channel_dom.map((dc) => ({
        salesOrgCode: so.code,
        salesOrgName: so.name,

        dcCode: dc.code,
        dcName: dc.name,
      })),
    ),

    ...sales_organization_exp.flatMap((so) =>
      distribution_channel_exp.map((dc) => ({
        salesOrgCode: so.code,
        salesOrgName: so.name,

        dcCode: dc.code,
        dcName: dc.name,
      })),
    ),
  ];

  // =====================================================
  // 3. DIVISION -> SALES ORG
  // =====================================================

  const divisionToSalesOrg = allSalesOrg.flatMap((so) =>
    division.map((div) => ({
      salesOrgCode: so.code,
      salesOrgName: so.name,

      divisionCode: div.code,
      divisionName: div.name,
    })),
  );

  // =====================================================
  // 4. SALES AREA
  // =====================================================

  const salesArea = [
    ...sales_organization_dom.flatMap((so) =>
      distribution_channel_dom.flatMap((dc) =>
        division.map((div) => ({
          salesOrgCode: so.code,
          salesOrgName: so.name,

          dcCode: dc.code,
          dcName: dc.name,

          divisionCode: div.code,
          divisionName: div.name,
        })),
      ),
    ),

    ...sales_organization_exp.flatMap((so) =>
      distribution_channel_exp.flatMap((dc) =>
        division.map((div) => ({
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

  // =====================================================
  // 5. SALES OFFICE -> SALES AREA
  // =====================================================

  const salesOfficeToSalesArea = salesArea.flatMap((area) =>
    sales_office.map((office) => ({
      ...area,

      salesOfficeCode: office.code,
      salesOfficeName: office.name,
    })),
  );

  // =====================================================
  // 6. SALES GROUP -> SALES OFFICE
  // =====================================================

  const salesGroupToSalesOffice = sales_office.flatMap((office) =>
    sales_group.map((group) => ({
      salesOfficeCode: office.code,
      salesOfficeName: office.name,

      salesGroupCode: group.code,
      salesGroupName: group.name,
    })),
  );

  // =====================================================
  // 7. PLANT -> COMPANY CODE
  // =====================================================

  const plantToCompanyCode = plant.map((p) => ({
    companyCode: companyCodeObj.code || "",
    companyName: companyCodeObj.name || "",

    plantCode: p.code,
    plantName: p.name,
  }));

  // =====================================================
  // 8. SALES ORG + DIST CHANNEL + PLANT
  // =====================================================

  const salesOrgDcPlant = [
    ...sales_organization_dom.flatMap((so) =>
      distribution_channel_dom.flatMap((dc) =>
        plant.map((p) => ({
          salesOrgCode: so.code,
          salesOrgName: so.name,

          dcCode: dc.code,
          dcName: dc.name,

          plantCode: p.code,
          plantName: p.name,
        })),
      ),
    ),

    ...sales_organization_exp.flatMap((so) =>
      distribution_channel_exp.flatMap((dc) =>
        plant.map((p) => ({
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
  // =====================================================
  // 9. SHIPPING POINT + PLANT
  // =====================================================

  const shippingPointToPlant = [
    ...shipping_point_p1.map((sp) => ({
      plantCode: plant?.[0]?.code || "",
      plantName: plant?.[0]?.name || "",

      shippingPointCode: sp.code,
      shippingPointName: sp.name,
    })),

    ...shipping_point_p2.map((sp) => ({
      plantCode: plant?.[1]?.code || "",
      plantName: plant?.[1]?.name || "",

      shippingPointCode: sp.code,
      shippingPointName: sp.name,
    })),
  ];

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

  // =====================================================
  // 11. SHIPPING POINT DETERMINATION
  // OVL2
  // =====================================================

  const shippingPointDetermination = [
    ...shipping_point_p1.map((sp) => ({
      shippingCondition: "01", // Standard
      loadingGroup: "0001", // Standard Loading Group

      plantCode: plant?.[0]?.code || "",

      shippingPointCode: sp.code,
      shippingPointName: sp.name,
    })),

    ...shipping_point_p2.map((sp) => ({
      shippingCondition: "01",

      loadingGroup: "0001",

      plantCode: plant?.[1]?.code || "",

      shippingPointCode: sp.code,
      shippingPointName: sp.name,
    })),
  ];

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
