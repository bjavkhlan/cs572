const dns = require("dns");
const { promisify } = require("util");


// Callback
dns.resolve4("www.mum.edu", (err, data) => {
  if(err) throw err;
  console.log(data);
});


// Promise
const resolvePromise = promisify(dns.resolve4);

resolvePromise("www.mum.edu")
.then(data => console.log(data))
.catch(err => console.error(err));

// Async/Await
async function resolveAsync(domain) {
  try {
    const address = await resolvePromise(domain);
    console.log(address);
  } catch(err) {
    console.error(err);
  }
}
resolveAsync("www.mum.edu");
