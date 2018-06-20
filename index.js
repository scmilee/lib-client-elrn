import ElrnID from 'lib-client-elrn-identity'
import ElrnWallet from 'lib-client-elrn-wallet'


export default class Elrn {
	constructor(options){
		let defaultOptions = {};
        this.elrnIdentity = new ElrnID(defaultOptions);
        this.elrnWallet = new ElrnWallet(defaultOptions);
		this.options = Object.call(defaultOptions, options);
	}
	//elrnID library function calls
	isUserSignedIn (){
		return this.elrnIdentity.isUserSignedIn();
	}
	redirectToSignIn (redirectURI, manifestURI, permissionsArray){
		return this.elrnIdentity.redirectToSignIn(redirectURI, manifestURI, permissionsArray);
	}
	isSignInPending (){
		return this.elrnIdentity.isSignInPending();
	}
	handlePendingSignIn (nameURL){
		return this.elrnIdentity.handlePendingSignIn(nameURL);
	}
	loadUserData (){
		return this.elrnIdentity.loadUserData();
	}
	signUserOut (optionalRedirect){
		return this.elrnIdentity.signUserOut(optionalRedirect);
	}
	putFile (filePath,content, options){
		return this.elrnIdentity.putFile(filePath,content,options);
	}
	getFile (filePath, options){
		return this.elrnIdentity.getFile(filePath, options);
	}
	//elrnWallet library function calls
	createSeed () {
        return this.elrnWallet.createSeed();
    }
    seedToMnemonic (seed) {
        return this.elrnWallet.seedToMnemonic(seed);
    }
    mnemonicToSeed (mnemonic) {
        return this.elrnWallet.mnemonicToSeed(mnemonic);
    }
    seedToAddress (seed, derivePath, network) {
        return this.elrnWallet.seedToAddress(seed, derivePath, network);
    }
    seedToPublicKey (seed, derivePath, network) {
        return this.elrnWallet.seedToPublicKey(seed, derivePath, network);
    }
    publicKeyToSegwitAddress (publicKey, derivePath, network) {
        return this.elrnWallet.publicKeyToSegwitAddress(publicKey, derivePath, network);
    }
    seedPrivateKeyToEthereumAddress (seedPrivateKey, derivePath) {
        return this.elrnWallet.seedPrivateKeyToEthereumAddress(seedPrivateKey, derivePath);
    }
    exchangeRate (pair) {
        return this.elrnWallet.exchangeRate(pair)
    }
    coins () {
        return this.elrnWallet.coins();
    }
    depositLimit (pair) {
        return this.elrnWallet.depositLimit(pair);
    }
    emailReceipt (emailAddress, txId) {
        return this.elrnWallet.emailReceipt(emailAddress, txId);
    }
    isDown (pair) {
        return this.elrnWallet.isDown();
    }
    marketInfo () {
        return this.elrnWallet.marketInfo();
    }
    recent () {
        return this.elrnWallet.recent();
    }
    shift (withdrawalAddress, pair, shapeshiftOptions) {
        return this.elrnWallet.shift(withdrawalAddress, pair, shapeshiftOptions);
    }
    shapeShiftStatus (depositAddress) {
        return this.elrnWallet.shapeShiftStatus(depositAddress);
    }
};