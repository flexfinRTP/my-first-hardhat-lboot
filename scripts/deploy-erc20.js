async function main() {
 
    const [deployer] = await ethers.getSigners();
 
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
 
    console.log("Account balance:", (await deployer.getBalance()).toString());
    const erc20Basic = await ethers.getContractFactory("ERC20Basic");
    const deployedContract = await erc20Basic.deploy(311);
    console.log("Deployed ERCC20 contract address:", deployedContract.address);
 
    //BONUS STEP 6 ?????
    // deployContract.transfer("0xa03CaFc49Ce2F594e5f7Ff19Fc5A83b96aFCc6e8", 0.5)

  }
 
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
