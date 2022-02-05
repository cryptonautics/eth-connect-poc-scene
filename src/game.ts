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





