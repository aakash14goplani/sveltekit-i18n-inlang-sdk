<script lang="ts">
  import { i, language, languages, switchLanguage } from "@inlang/sdk-js";
  import type { PageData } from './$types';
  import { onMount } from 'svelte';

  let selected = 'en';

  onMount(() => {
    const valueFromStorage = localStorage.getItem('language') || 'en';
    selected = valueFromStorage;
    localStorage.setItem('language', valueFromStorage);
  })
</script>

<div class="container">
  <div class="container__title">
    <h1>{i('heading')}</h1>
  </div>
  <div class="container__toggle">
    <span>{i('toggle_label')}: </span>
    <select bind:value={selected} on:change={() => switchLanguage(selected)}>
      {#each languages as lang}
        <option value="{lang}" selected>{lang.toUpperCase()}</option>
      {/each}
    </select>
  </div>
  <!-- <div class="container__content">
    <p>{$_('body_text', {
      values: {
        download: $number(30242),
        date: $date(Date.UTC(2023, 6, 14, 0, 0, 0, 0), { year: "numeric", month: "long", day: "numeric" })
      }
    })}</p>

    <div class="container__content__plural">
      <div class="container__content__plural__buttons">
        <button class:active={randomNumber === 0} on:click={() => randomNumber = 0}>0</button>
        <button class:active={randomNumber === 1} on:click={() => randomNumber = 1}>1</button>
        <button class:active={randomNumber === 2} on:click={() => randomNumber = 2}>2</button>
      </div>
      <span>{$_('awards', { values: { n: randomNumber } })}</span>
    </div>

    <div class="container__content__formatter">
      <span><strong>Time: </strong>{$time(new Date(), { hour: "numeric", minute: "numeric", second: "numeric" })}</span>
      <span><strong>Date: </strong>{$date(new Date(), { year: "numeric", month: "long", day: "numeric" })}</span>
      <span><strong>Currency: </strong>{$number(2, { style: "currency", currency: getCurrencyCode() })}</span>
    </div>
  </div> -->
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    margin: 1rem;

    &__title {
      display: flex;
      justify-content: center;
    }

    &__toggle {
      padding: 0 1rem;
      font-size: 1.4rem;
      line-height: 2rem;

      select {
        padding: 0.25rem;
        font-size: 1rem;
        margin-left: 1rem;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;
      font-size: 1.4rem;
      line-height: 2rem;
      text-align: justify;

      &__plural {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        
        button {
          margin-right: 2rem;
        }

        span {
          margin-top: 1rem;
        }

        .active {
          color: blue;
          background-color: aliceblue;
          padding: 0.5rem;
        }
      }

      &__formatter {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
      }
    }
  }
</style>
