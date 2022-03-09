<template>
  <q-card-section class="text-subitle2">
    <h6 class="text-h5">Публикации</h6>

    <q-separator class="q-my-md" />

    <div v-if="publications && publications.length">
      <div
        v-for="publication in publications"
        :key="publication.id"
      >
        <h6 class="text-h6">
          {{ publication.title }}
        </h6>

        <p class="text-body1 text-grey">
          {{ publication.body }}
        </p>

        <span class="text-subtitle1 text-grey">
          {{ publication.published }}
        </span>
        <q-separator class="q-my-md" />
      </div>
    </div>
    <div v-else>Публикации не загружены в базу данных</div>
  </q-card-section>
</template>

<script>
import { onMounted, ref } from "vue";
import MembersService from "src/service/members.service";

export default {
  props: {
    slug: {
      type: String,
      require: true,
    },
  },

  setup (props) {
    const membersService = new MembersService();
    const publications = ref(null);

    onMounted(() => {
      membersService
        .getBySlug(props.slug)
        .then((res) => {
          publications.value = res.publications;
        })
        .catch((e) =>
          console.log("AppPublication card error on server side", e)
        );
    });

    return {
      publications,
    };
  },
};
</script>
