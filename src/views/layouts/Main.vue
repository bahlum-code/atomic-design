<template>
    <!-- TemplateLanding -->
    <section class="flex flex-col min-h-screen">
    <OrganismHeader :links="links"/>
    <div class="flex-auto flex flex-wrap bg-white">
      <MoleculeBanner class="w-full md:w-3/4 text-center md:text-left"/>
      <div class="container mx-auto px-4 py-8 md:py-16">
        <OrganismGrid :cards="cards"/>
      </div>
    </div>
    <OrganismFooter :columnOneLinks="columnOneLinks" :columnTwoLinks="columnTwoLinks"/>
  </section>
</template>
<script>
import OrganismHeader from "@/components/OrganismHeader";
import OrganismFooter from "@/components/OrganismFooter";
import MoleculeBanner from "@/components/Molecules/Banner";
import OrganismGrid from "@/components/OrganismGrid";

export default {
  name: "TemplateLanding",
  components: {
    MoleculeBanner,
    OrganismHeader,
    OrganismFooter,
    OrganismGrid
  },
  data: () => {
    return {
      links: [{ name: "Header link 1", url: "#" }],
      cards: [
        {
          title: "Card 1",
          text: "Sed gravida libero sem, sed ornare arcu venenatis at."
        },
        {
          title: "Card 2",
          text:
            "Etiam in arcu lectus. Nulla facilisi. Nunc viverra vehicula nunc eu tristique."
        },
        {
          title: "Card 3",
          text: "Sed gravida libero sem, etiam in arcu lectus."
        }
      ],
      columnOneLinks: [
        { name: "tailwindcss", url: "/tailwind" },
        { name: "Footer column 1", url: "#" }
      ],
      columnTwoLinks: [
        { name: "Footer column 2", url: "#" },
        { name: "Footer column 2", url: "#" }
      ]
    };
  }
};
</script>