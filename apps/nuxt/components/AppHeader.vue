<template>
  <header>
    <UContainer class="container">
      <nav>
        <ul>
          <li>
            <ULink
              to="/"
              active-class="text-primary"
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >Home</ULink
            >
          </li>
          <li>
            <ULink
              to="/about/"
              active-class="text-primary"
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >About</ULink
            >
          </li>
        </ul>
      </nav>
    </UContainer>
  </header>
</template>

<style lang="scss">
header {
  border-bottom: 1px solid;
  padding-block: 1rem;
}

ul {
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
