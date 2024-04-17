const axios = require('axios');

async function findOpenGroups() {
  for (let i = 300000; i < 900000; i++) {
    try {
      const group = await axios.get(`https://groups.roproxy.com/v1/groups/${i}`);
      if (group.data.publicEntryAllowed === true && group.data.owner === null) {
        await axios.post('https://discord.com/api/webhooks/1230205550545862677/66wjj-Wl9NiNXrez7mj1W2lOKSGFpzymR0FnyV5Od2KrTP8k8TU27KVFUVb4gIh5hOQ_', {
          content: `Found an open group: https://www.roblox.com/groups/${i}`
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
}

findOpenGroups();
