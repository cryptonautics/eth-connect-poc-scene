import { getProvider } from "@decentraland/web3-provider"
import { getUserAccount } from "@decentraland/EthereumController"
import { RequestManager, ContractFactory } from "eth-connect"

import abi from "../contracts/mana"


executeTask(async () => {

  try {
    // Setup steps explained in the section above
    const provider = await getProvider()
    const requestManager = new RequestManager(provider)
    const factory = new ContractFactory(requestManager, abi)
    const contract = (await factory.at(
      "0x2a8fd99c19271f4f04b1b7b9c4f7cf264b626edb"
    )) as any
    const playerAddress = await getUserAccount()
    log(playerAddress)

    // Perform a function from the contract
    const res = await contract.setBalance(
      "0xaFA48Fad27C7cAB28dC6E970E4BFda7F7c8D60Fb",
      100,
      {
        from: playerAddress,
      }
    )

    // Log response
    log(res)
  } catch (error) {
    
    let errorMessage = "Failed to do something exceptional... failure to launch :`("
    if (error instanceof Error) {
      errorMessage = error.message
    }
    log(errorMessage)
  
  }
})







///////////////////////////////////////////////
// entity ("Manifest Metaverse Metaphysics...")
///////////////////////////////////////////////


// Create entities
const entity = new Entity()

const myTextParent = new TextShape("Manifest Metaverse Metaphysics...");
entity.addComponent(myTextParent);

// Create a transform for the parent
let parentTransform = new Transform({
    position: new Vector3(4, 1, 4),
    scale: new Vector3(0.5, 0.5, 0.5),
})

myTextParent.fontSize = 10
myTextParent.color = Color3.Red()
myTextParent.font = new Font(Fonts.LiberationSans)

entity.addComponent(parentTransform)

// Add entities to the engine
engine.addEntity(entity)


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////


//############################################################################
//############################################################################
//############################################################################
//
//    <EMERGENT ENGINE - SYNCHRONICITY>
//
//    A decentralized, on-chain, metaverse engine that manifests metaphysics and
//    meaning emergent from collective cryptonautic consciousness
//
//
//############################################################################
//############################################################################
//############################################################################



var here_we_go_counter = 1

class ContractStateRenderSystem {
  // this group will contain every entity that has a Transform component
  group = engine.getComponentGroup(Transform)

  async update(dt: number) {
    
    log('Here we go...: ' + here_we_go_counter.toString())

    /*
    executeTask(async () => {
      try {

        var getUserAccountAddress = await EthereumController.getUserAccount()
        globalGetUserAccountAddress = 'getUserAccount(): ' + getUserAccountAddress
        entity2.getComponent(TextShape).value = globalGetUserAccountAddress
        log('getUserAccount(): ', getUserAccountAddress)

        var displayMyStaticWalletAddress = 'myStaticWalletAddress: ' + myStaticWalletAddress
        entity3.getComponent(TextShape).value = displayMyStaticWalletAddress
        log('myStaticWalletAddress: ', myStaticWalletAddress)

      } catch (error) {
        log(error)
      }
    })
    */

    log('Here we went...: ' + here_we_go_counter.toString())

    here_we_go_counter++

  }
}

//############################################################################
//############################################################################
//############################################################################
//
//    </EMERGENT ENGINE - SYNCHRONICITY>
//
//############################################################################
//############################################################################
//############################################################################


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

class RotatorSystem {
  // this group will contain every entity that has a Transform component
  group = engine.getComponentGroup(Transform)

  update(dt: number) {
    // iterate over the entities of the group
    for (let entity of this.group.entities) {
      // get the Transform component of the entity
      const transform = entity.getComponent(Transform)

      // mutate the rotation
      transform.rotate(Vector3.Up(), dt * 10)
    }
  }
}
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////


// Add a new instance of the ContractStateRenderSystem to the engine
engine.addSystem(new ContractStateRenderSystem())
// Add a new instance of the RotatorSystem to the engine
engine.addSystem(new RotatorSystem())


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////





