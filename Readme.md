### RSVP-CLI

Runs a specified command and attempts to answer the questions automatically.
The responder is experimental so please be careful!

## Installation

```
npm install -g rsvp-cli
```

##Usage

Add a json file like so

```json
{
  "cmd": "node test/prompt",
  "responses": [
    {
      "regex": "response 1",
      "response": "yes"
    },
    {
      "regex": "response 2",
      "response": "no"
    },
    {
      "regex": "response 3",
      "response": "maybe"
    }
  ]
}
```

Execute the command like below with a path to the above file

```
rsvp-cli -f=test/commands.json
```