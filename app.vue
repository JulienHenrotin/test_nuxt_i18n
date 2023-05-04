<template>
  <div>
    <p>{{ $t('hello', { param: 'World' }) }}</p>

    ____________________________

    <p>{{ $t('description', { start: 123456 }) }}</p>

    ______________________________
    <br />

    <p>{{ test() }}</p>

    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
    </form>
  </div>
</template>
<script setup>
const { locale, t } = useI18n();
function test() {
  return t('hello', { param: 'Hello word with function useI18n' });
}
</script>
