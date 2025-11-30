// ----------------------------------------------
// 1. Promise com erro direto (throw)
// ----------------------------------------------
const erroDireto = new Promise((resolve, reject) => {
  throw new Error("Erro dentro da promise (throw)");
});

erroDireto
  .then(() => console.log("NUNCA executa (throw)"))
  .catch(err => console.log("[1] Capturado:", err.message));


// ----------------------------------------------
// 2. Promise rejeitada com reject()
// ----------------------------------------------
const rejeitada = new Promise((resolve, reject) => {
  reject("Rejeitei a promise");
});

rejeitada
  .then(() => console.log("NUNCA executa (reject)"))
  .catch(err => console.log("[2] Capturado:", err));


// ----------------------------------------------
// 3. Erro dentro de um THEN
// ----------------------------------------------
Promise.resolve("Ok")
  .then(() => {
    console.log("[3] Primeiro then OK");
    throw new Error("Erro dentro do THEN");
  })
  .then(() => console.log("NUNCA executa aqui"))
  .catch(err => console.log("[3] Capturado:", err.message));


// ----------------------------------------------
// 4. Finally sempre executa
// ----------------------------------------------
Promise.reject("Falhou")
  .catch(err => {
    console.log("[4] Capturado:", err);
  })
  .finally(() => {
    console.log("[4] Finally executou (mesmo com erro)");
  });


// ----------------------------------------------
// 5. Async/Await com try/catch
// ----------------------------------------------
async function testarAsync() {
  try {
    await Promise.reject("Erro no async/await");
  } catch (err) {
    console.log("[5] Try/Catch capturou:", err);
  }
}

testarAsync();


// ----------------------------------------------
// 6. Async/Await SEM try/catch (erro sobe para o .catch)
// ----------------------------------------------
async function testarAsync2() {
  await Promise.reject("Erro sem try/catch");
}

testarAsync2()
  .catch(err => console.log("[6] .catch externo capturou:", err));


// ----------------------------------------------
// 7. Misturando await + .catch
// ----------------------------------------------
async function testarAsync3() {
  const resultado = await Promise.reject("Erro misturado")
    .catch(err => {
      console.log("[7] .catch interno capturou:", err);
      return "Valor após erro";
    });

  console.log("[7] Continuou:", resultado);
}

testarAsync3();
