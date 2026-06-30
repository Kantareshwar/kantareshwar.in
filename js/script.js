const serviceData = {
  pop: {
    title: "Plaster of Paris (POP)",
    description:
      "Clean ceiling and wall finishes for interior spaces, with attention to line, proportion, and final surface quality.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        title: "Ceiling",
        description: "False ceiling, borders, profiles, and decorative POP finishing.",
        image:
          "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Wall",
        description: "Wall panels, surface finishing, and detail work for neat interiors.",
        image:
          "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  carpenter: {
    title: "Carpenter (Furniture)",
    description:
      "Custom and modular furniture work for daily-use spaces, from frames and fittings to polish and assembly.",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        title: "Door & Window Frames",
        description: "Accurate frame installation and finishing.",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Sofa & Cushion Work",
        description: "Couch repairs, cushioning, and seating improvements.",
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Kitchen Drawers",
        description: "Smooth storage drawers and practical kitchen fittings.",
        image:
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Dressing Tables",
        description: "Custom dressing units with storage and mirror layouts.",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Hardware Fitting",
        description: "Hinges, handles, channels, and daily-use hardware.",
        image:
          "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Locks & Security",
        description: "Door locks, latches, and secure furniture fittings.",
        image:
          "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "TV Unit",
        description: "Wall-mounted and storage-based TV unit work.",
        image:
          "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Furniture Assembly",
        description: "Assembly, alignment, and finishing for new furniture.",
        image:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Wood Polish & Painting",
        description: "Surface preparation, polish, paint, and touch-ups.",
        image:
          "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Laminate & Veneer",
        description: "Laminate and veneer finishes for premium furniture surfaces.",
        image:
          "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Modular Furniture",
        description: "Flexible, space-saving modular furniture solutions.",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Custom Furniture",
        description: "Made-to-measure furniture for unique room requirements.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  electrician: {
    title: "Electrician (Wiring)",
    description:
      "Neat wiring, fixtures, panels, and power support work for safer and more functional interiors.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        title: "Consoles",
        description: "Underground wiring routes and concealed electrical points.",
        image:
          "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Wiring & Rewiring",
        description: "Fresh wiring, rewiring, and correction of old lines.",
        image:
          "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Fixture Installation",
        description: "Lights, fans, and fixture installation.",
        image:
          "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Switchboards & Outlets",
        description: "Switchboards, sockets, and outlet point fitting.",
        image:
          "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Power Backups",
        description: "Backup power planning and connection support.",
        image:
          "https://images.unsplash.com/photo-1620283085438-f11d1bc2e2ee?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Panel Building",
        description: "Electrical panel planning, assembly, and fitting.",
        image:
          "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  plumbing: {
    title: "Plumbing",
    description:
      "Water supply, drainage, fixtures, and appliance connections handled with practical, site-ready workmanship.",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        title: "Water Supply",
        description: "Supply lines, taps, and water connection work.",
        image:
          "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Drainage & Sewer",
        description: "Drainage lines, sewer connections, and repairs.",
        image:
          "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Fixtures & Appliances",
        description: "Bathroom fixtures, sinks, and appliance connections.",
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80"
      }
    ]
  }
};

function renderCategory(categoryKey) {
  const category = serviceData[categoryKey];

  $("#categoryFeature").html(`
    <img src="${category.image}" alt="${category.title}" loading="lazy">
    <div class="feature-copy">
      <p class="eyebrow">Selected service</p>
      <h3>${category.title}</h3>
      <p>${category.description}</p>
    </div>
  `);

  const cards = category.items
    .map(
      (item) => `
      <article class="service-card">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </article>
    `
    )
    .join("");

  $("#serviceGrid").html(cards);
}

$(function () {
  $("#year").text(new Date().getFullYear());
  renderCategory("pop");

  $(".tab-button").on("click", function () {
    const category = $(this).data("category");
    $(".tab-button").removeClass("active").attr("aria-selected", "false");
    $(this).addClass("active").attr("aria-selected", "true");
    renderCategory(category);
  });

  $(".menu-toggle").on("click", function () {
    const isOpen = $(".nav-links").toggleClass("open").hasClass("open");
    $(this).attr("aria-expanded", String(isOpen));
  });

  $(".nav-links a").on("click", function () {
    $(".nav-links").removeClass("open");
    $(".menu-toggle").attr("aria-expanded", "false");
  });
});
