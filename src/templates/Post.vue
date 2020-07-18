<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div>
      <div class="mb-8 border-t border-b px-4 py-3" role="alert" v-if="$page.post.originalArticle">
        🌐 Це переклад статті: <a :href="$page.post.originalArticle.url" rel="noopener" target="_blank"><span class="font-bold">{{ $page.post.originalArticle.title }}</span> від {{ $page.post.originalArticle.author }}</a>
      </div>
      <div v-if="$page.post.cover">
        <g-image :src="$page.post.cover.file" alt="Обкладинка статті" />
        <p class="text-center text-gray-700 mb-4 mt-2">Фото від <a :href="$page.post.cover.authorLink" target="_blank" rel="noopener">{{ $page.post.cover.author }}</a></p>
      </div>
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="flex flex-wrap mb-8 text-sm">
        <g-link
            :to="tag.path"
            v-for="tag in $page.post.tags"
            :key="tag.id"
            class="bg-gray-300 rounded-full px-4 py-2 mr-4 mb-4 hover:bg-green-300">
          {{ tag.title }}
        </g-link>
      </div>
      <div class="mb-8">
        <g-link to="/" class="font-bold uppercase">До списку статей</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "D MMMM, Y", locale: "uk")
    content
    tags {
      title
      path
    }
    cover {
      file
      author
      authorLink
    }
    originalArticle {
      url
      title
      author
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      script: [{
        src: "https://platform.twitter.com/widgets.js",
        defer: true,
      }]
    }
  }
}
</script>

<style src="../css/github-markdown.css" />

