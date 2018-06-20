import ElrnID from 'lib-client-elrn-identity'
import ElrnWallet from 'lib-client-elrn-wallet'


export default class Elrn {
	constructor(){
		let defaultOptions = {};
		this.options = Object.call(defaultOptions, options);
	}
	//elrnID library function calls
	isUserSignedIn(){
		return ElrnID.isUserSignedIn();
	}
	redirectToSignIn(redirectURI, manifestURI, permissionsArray){
		return ElrnID.redirectToSignIn(redirectURI, manifestURI, permissionsArray);
	}
	isSignInPending(){
		return ElrnID.isSignInPending();
	}
	handlePendingSignIn(nameURL){
		return ElrnID.handlePendingSignIn(nameURL);
	}
	loadUserData(){
		return ElrnID.loadUserData();
	}
	signUserOut(optionalRedirect){
		return ElrnID.signUserOut(optionalRedirect);
	}
	putFile(filePath,content, options){
		return ElrnID.putFile(filePath,content,options);
	}
	getFile(filePath, options){
		return ElrnID.getFile(filePath, options);
	}
	//elrnWallet library function calls
	createSeed () {
        return ElrnWallet.createSeed();
    }
    seedToMnemonic (seed) {
        return ElrnWallet.seedToMnemonic(seed);
    }
    mnemonicToSeed (mnemonic) {
        return ElrnWallet.mnemonicToSeed(mnemonic);
    }
    seedToAddress (seed, derivePath, network) {
        return ElrnWallet.seedToAddress(seed, derivePath, network);
    }
    seedToPublicKey (seed, derivePath, network) {
        return ElrnWallet.seedToPublicKey(seed, derivePath, network);
    }
    publicKeyToSegwitAddress (publicKey, derivePath, network) {
        return ElrnWallet.publicKeyToSegwitAddress(publicKey, derivePath, network);
    }
    seedPrivateKeyToEthereumAddress (seedPrivateKey, derivePath) {
        return ElrnWallet.seedPrivateKeyToEthereumAddress(seedPrivateKey, derivePath);
    }
    exchangeRate (pair) {
        return ElrnWallet.exchangeRate(pair)
    }
    coins () {
        return ElrnWallet.coins();
    }
    depositLimit (pair) {
        return ElrnWallet.depositLimit(pair);
    }
    emailReceipt (emailAddress, txId) {
        return ElrnWallet.emailReceipt(emailAddress, txId);
    }
    isDown (pair) {
        return ElrnWallet.isDown();
    }
    marketInfo () {
        return ElrnWallet.marketInfo();
    }
    recent () {
        return ElrnWallet.recent();
    }
    shift (withdrawalAddress, pair, shapeshiftOptions) {
        return ElrnWallet.shift(withdrawalAddress, pair, shapeshiftOptions);
    }
    shapeShiftStatus (depositAddress) {
        return ElrnWallet.shapeShiftStatus(depositAddress);
    }
};