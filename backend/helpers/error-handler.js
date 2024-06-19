function errorHandler(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      return res.status(401).json({ message: "Cet utilisateur n'est pas autorisé" });
    }

    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }

    return res.status(500).json({ message: err.message || 'Erreur interne du serveur' });
}

export default errorHandler;
